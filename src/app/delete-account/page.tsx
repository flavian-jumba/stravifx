import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description:
    "How to delete your StraviFX account and data, in the app or by email, what gets deleted and how long it takes.",
  alternates: { canonical: "/delete-account" },
};

const SUBJECT = "Delete My Account";
const requestHref = `mailto:${SITE.email.support}?subject=${encodeURIComponent(SUBJECT)}`;

const STEPS = [
  {
    title: "Send an email to",
    body: (
      <a href={requestHref} className="font-mono text-gold">
        {SITE.email.support}
      </a>
    ),
  },
  {
    title: "Use the subject line",
    body: <span className="font-mono text-fg">&ldquo;{SUBJECT}&rdquo;</span>,
  },
  {
    title: "Include the email address you used to sign up",
    body: "The one on your Google Sign-In account, so we can find your data.",
  },
];

export default function DeleteAccountPage() {
  return (
    <LegalPage
      title="Delete your account"
      updated="15 October 2026"
      intro={
        <p>
          You can delete your StraviFX account and everything tied to it at any
          time, either in the app or by sending us a request.
        </p>
      }
    >
      <LegalSection id="in-app" title="In the app (fastest)">
        <p>
          Open StraviFX and go to{" "}
          <strong>Profile → Settings → Delete account</strong>, then confirm.
          Your account and data are deleted straight away.
        </p>
      </LegalSection>

      <LegalSection id="by-email" title="By email">
        <p>
          If you no longer have the app or can&rsquo;t sign in, send us a
          request and we&rsquo;ll take care of the rest.
        </p>
        <ol className="mt-6 grid gap-3">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="flex gap-4 rounded-[20px] border border-white/[0.08] bg-ink-2 p-5"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/15 font-mono text-sm text-fg">
                {i + 1}
              </span>
              <div>
                <p className="!mt-0 font-semibold text-fg">{step.title}</p>
                <p className="!mt-1 break-all">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <a
          href={requestHref}
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-gold px-7 text-[1rem] font-semibold !text-black !no-underline transition-colors duration-300 hover:bg-gold-soft"
        >
          Start deletion request
        </a>
      </LegalSection>

      <LegalSection id="what-gets-deleted" title="What gets deleted">
        <p>
          Your name, email address, and any analysis history, saved chart scans,
          uploaded images, preferences, or trade-related data associated with
          your account will be permanently deleted from our systems.
        </p>
        <p>
          Deleting your account does not cancel a Google Play or App Store
          subscription. Cancel it separately in the store you bought it from.
        </p>
      </LegalSection>

      <LegalSection id="processing-time" title="Processing time">
        <p>
          Email requests are processed within 7 business days. Some data may be
          retained for up to 30 days afterward for backup and security purposes
          before being permanently and irreversibly deleted.
        </p>
      </LegalSection>

      <LegalSection id="questions" title="Questions?">
        <p>
          For any questions about this process, email us anytime at{" "}
          <a href={`mailto:${SITE.email.support}`}>{SITE.email.support}</a>. Our{" "}
          <a href="/privacy">Privacy Policy</a> has the full details.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
