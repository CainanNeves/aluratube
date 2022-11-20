import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
  });

  const playlist = await prisma.playlist.create({
    data: {
      title: "Jogos",
      ownerId: user.id,
    },
  });

  await prisma.playlist.create({
    data: {
      title: "Gere",
      ownerId: user.id,
    },
  });

  await prisma.video.create({
    data: {
      name: "Google",
      url: "www.google.com",

      inPlaylists: {
        create: {
          playlistId: playlist.id,
        },
      },
    },
  });
}
main();
