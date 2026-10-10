import { handleWebhook } from "../_shared/learn.ts";

Deno.serve((request) => handleWebhook(request, (name) => Deno.env.get(name)));
