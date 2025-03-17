import {Elysia, t} from "elysia";
import {prisma} from "../../lib/prisma";

const series = new Elysia({prefix: '/series'})
    .get('', async () => await prisma.series.findMany({
        include: {
            relatedSeries: true,
        }
    }))
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
    .patch(
        '',
        async ({body}) => await prisma.series.update({
            where: {
                id: body.seriesId
            },
            data: {
                relatedSeries: {
                    connect: {
                        id: body.toId
                    }
                }
            }
        }),
        {
            body: t.Object({
                seriesId: t.String(),
                toId: t.String()
            })
        }
    )

export default series