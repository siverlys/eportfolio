import { redirect, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = (_) => {
    redirect(308, "/blog")
}