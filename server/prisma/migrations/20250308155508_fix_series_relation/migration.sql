/*
  Warnings:

  - You are about to drop the column `seriesId` on the `Series` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_SeriesRelations" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_SeriesRelations_A_fkey" FOREIGN KEY ("A") REFERENCES "Series" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_SeriesRelations_B_fkey" FOREIGN KEY ("B") REFERENCES "Series" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Series" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL
);
INSERT INTO "new_Series" ("create_at", "id", "title", "update_at") SELECT "create_at", "id", "title", "update_at" FROM "Series";
DROP TABLE "Series";
ALTER TABLE "new_Series" RENAME TO "Series";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_SeriesRelations_AB_unique" ON "_SeriesRelations"("A", "B");

-- CreateIndex
CREATE INDEX "_SeriesRelations_B_index" ON "_SeriesRelations"("B");
