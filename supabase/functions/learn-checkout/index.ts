import { handleCheckout } from "../_shared/learn.ts";

Deno.serve((request) => handleCheckout(request, (name) => Deno.env.get(name)));
