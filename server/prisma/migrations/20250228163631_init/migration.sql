-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "artist" TEXT,
    "image" TEXT,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "series" TEXT,
    "pageCount" INTEGER NOT NULL,
    "ISBN" TEXT NOT NULL,
    "releaseDate" DATETIME NOT NULL
);
