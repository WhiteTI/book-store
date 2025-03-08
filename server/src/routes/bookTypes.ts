import {Elysia, t} from "elysia";
import {prisma} from "../../lib/prisma";

const bookTypes = new Elysia({prefix: '/book-types'})
    .get('', async () => await prisma.bookType.findMany())
    .post(
        '',
        async ({body}) => await prisma.bookType.create({
            data: body
        }),
        {
            body: t.Object({
                title: t.String()
            })
        }
    )

export default bookTypes