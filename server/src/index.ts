import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import betterAuth from "./betterAuth";
import bookTypes from "./routes/bookTypes";
import genres from "./routes/genres";
import series from "./routes/series";
import books from "./routes/books";
import swagger from "@elysiajs/swagger";

// const betterAuthView = ({request, error}: Context) => {
//     const BETTER_AUTH_ACCEPT_METHODS = ['GET', 'POST', 'PATCH', 'DELETE']
//
//     if (BETTER_AUTH_ACCEPT_METHODS.includes(request.method)) {
//         return auth.handler(request)
//     } else {
//         error(405)
//     }
// }

const app = new Elysia()
    // .all('/api/auth/*', (ctx) => betterAuthView(ctx))
    .use(cors())
    .use(swagger())
    .use(betterAuth)
    .use(bookTypes)
    .use(genres)
    .use(series)
    .use(books)
    .get("/", () => "Hello Elysia")
    .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
