import { handleConfirm } from "../_shared/learn.ts";

Deno.serve((request) => handleConfirm(request, (name) => Deno.env.get(name)));
