import {Elysia, t} from "elysia";
import {prisma} from "../../lib/prisma";

const genres = new Elysia({prefix: '/genres'})
    .get('', async () => await prisma.genre.findMany())
    .post('', async ({body}) => await prisma.genre.create({
        data: body
    }), {body: t.Object({title: t.String()})})

export default genres