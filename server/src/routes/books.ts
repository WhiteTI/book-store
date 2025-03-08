import {Elysia} from "elysia";
import {prisma} from "../../lib/prisma";

const books = new Elysia({prefix: '/books'})
    .get('', async () =>  await prisma.book.findMany())

export default books