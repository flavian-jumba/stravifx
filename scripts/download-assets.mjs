#!/usr/bin/env node
/**
 * Downloads every asset used by the amyfoodjournal.com homepage into public/,
 * mirroring the original paths so markup/srcsets can be copied verbatim.
 * YouTube thumbnails are rehosted under public/youtube/<videoId>.jpg.
 */
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const ORIGIN = 'https://www.amyfoodjournal.com';
const PUBLIC = new URL('../public/', import.meta.url).pathname;
const BATCH = 4;

const assets = JSON.parse(await readFile(new URL('./asset-manifest.json', import.meta.url), 'utf8'));

function targetPath(url) {
  if (url.startsWith('https://img.youtube.com/vi/')) {
    const id = url.split('/vi/')[1].split('/')[0];
    return join(PUBLIC, 'youtube', `${id}.jpg`);
  }
  return join(PUBLIC, decodeURIComponent(url.replace(/^\//, '')));
}

async function download(url) {
  const absolute = url.startsWith('http') ? url : ORIGIN + encodeURI(url);
  const dest = targetPath(url);
  const res = await fetch(absolute);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} — ${absolute}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, buf);
  return { url, bytes: buf.length };
}

let ok = 0;
const failures = [];
for (let i = 0; i < assets.length; i += BATCH) {
  const results = await Promise.allSettled(assets.slice(i, i + BATCH).map(download));
  for (const r of results) {
    if (r.status === 'fulfilled') {
      ok++;
      console.log(`  ✓ ${r.value.url} (${(r.value.bytes / 1024).toFixed(1)} KB)`);
    } else {
      failures.push(r.reason.message);
      console.error(`  ✗ ${r.reason.message}`);
    }
  }
}
console.log(`\n${ok}/${assets.length} assets downloaded${failures.length ? `, ${failures.length} failed` : ''}`);
if (failures.length) process.exit(1);
