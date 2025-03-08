import {Elysia, t} from "elysia";
import {prisma} from "../../lib/prisma";

const series = new Elysia({prefix: '/series'})
    .get('', async () => await prisma.series.findMany())
    .post(
        '',
        async ({body}) => await prisma.series.create({
            data: body
        }),
        {
            body: t.Object({
                title: t.String()
            })
        }
    )

export default series