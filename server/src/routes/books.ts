import {Elysia, t} from "elysia";
import {prisma} from "../../lib/prisma";

const books = new Elysia({prefix: '/books'})
    .get('', async () =>  await prisma.book.findMany({
        include: {
            BookType: true,
            Series: true,
            Genres: true
        }
    }))
    .post(
        '',
        async ({body}) => {
            return prisma.book.create({
                data: {
                    title: body.title,
                    author: body.author,
                    description: body.description,
                    ageRating: body.ageRating,
                    pageCount: body.pageCount,
                    ISBN: body.ISBN,
                    releaseDate: body.releaseDate,
                    BookType: {connect: {id: body.bookTypeId}}, // 3f85e1c2-5032-4185-9da8-7d5572df1305
                    Series: {connect: {id: body.seriesId}}, // 9ae4028d-c187-4581-9d30-2e1b35d175ae
                    artist: body.artist,
                    image: body.image,
                    cover: body.cover,
                    price: body.price,
                    Genres: {connect: body.genres.map(item => ({id: item}))} // 0cc0ee36-6430-4be2-b2aa-9be792c02b08 becad9ef-2d10-4ee4-91d0-4edfee817be0 3d3ca38d-ccfe-44ae-bef5-468f681bd1d6
                }
            });
        },
        {
            body: t.Object({
                title: t.String(),
                author: t.String(),
                description: t.String(),
                ageRating: t.String(),
                pageCount: t.Number(),
                ISBN: t.String(),
                releaseDate: t.Date(),
                bookTypeId: t.String(),
                seriesId: t.Optional(t.String()),
                artist: t.Optional(t.String()),
                image: t.Optional(t.String()),
                cover: t.Optional(t.String()),
                price: t.Optional(t.String()),
                genres: t.Array(t.String())
            })
        }
    )

export default books