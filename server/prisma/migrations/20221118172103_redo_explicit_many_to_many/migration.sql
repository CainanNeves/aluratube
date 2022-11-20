/*
  Warnings:

  - You are about to drop the `_PlaylistToVideo` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[url]` on the table `Video` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Playlist_ownerId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_PlaylistToVideo";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "VideosInPlaylists" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "videoId" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,
    CONSTRAINT "VideosInPlaylists_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "VideosInPlaylists_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "VideosInPlaylists_playlistId_videoId_key" ON "VideosInPlaylists"("playlistId", "videoId");

-- CreateIndex
CREATE UNIQUE INDEX "Video_url_key" ON "Video"("url");
