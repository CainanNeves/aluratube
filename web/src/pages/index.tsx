import DarkModeSwitch from "../components/DarkModeSwitch";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import { useColorMode } from "../hooks/useColorMode";

export default function HomePage() {
  const { mode } = useColorMode();
  const playlists = {
    jogos: [
      {
        title: "Frostpunk - Neve e Steak tartare",
        url: "https://www.youtube.com/watch?v=QsqatJxAUtk",
        thumb: "https://img.youtube.com/vi/QsqatJxAUtk/hqdefault.jpg",
      },
      {
        title: "Frostpunk - Neve e Steak tartare",
        url: "https://www.youtube.com/watch?v=O8jtAyPuhNg",
        thumb: "https://img.youtube.com/vi/O8jtAyPuhNg/hqdefault.jpg",
      },
      {
        title: "Gas Station Simulator - 8 dias sem dormir!",
        url: "https://www.youtube.com/watch?v=R1d0DyRDG_Q",
        thumb: "https://img.youtube.com/vi/R1d0DyRDG_Q/hqdefault.jpg",
      },
      {
        title: "Gartic Phone - Não assista a esse NerdPlayer!",
        url: "https://www.youtube.com/watch?v=0oJQUs5oRiM",
        thumb: "https://img.youtube.com/vi/0oJQUs5oRiM/hqdefault.jpg",
      },
      {
        title: "Netdecking Estraga o Magic?",
        url: "https://www.youtube.com/watch?v=dXihyhYEsEc",
        thumb: "https://img.youtube.com/vi/dXihyhYEsEc/hqdefault.jpg",
      },
      {
        title: "Cities: Skylines - EPCOTAB, o futuro de Saint Laurrent",
        url: "https://www.youtube.com/watch?v=zybKHMgLCWU",
        thumb: "https://img.youtube.com/vi/zybKHMgLCWU/hqdefault.jpg",
      },
      {
        title: "We Were Here Together - Os Enigmas deste Mundo",
        url: "https://www.youtube.com/watch?v=UKgQsrHUG40",
        thumb: "https://img.youtube.com/vi/UKgQsrHUG40/hqdefault.jpg",
      },
      {
        title: "Microsoft Flight Simulator - Top Gun: Oceania - Missão RJ!",
        url: "https://www.youtube.com/watch?v=n3TneUb5c-w",
        thumb: "https://img.youtube.com/vi/n3TneUb5c-w/hqdefault.jpg",
      },
    ],
    "front-end": [
      {
        title: "Jogo com JavaScript #01: Criando um Flappy Bird do ZERO!!!",
        url: "https://youtube.com/watch?v=jOAU81jdi-c",
        thumb: "https://img.youtube.com/vi/jOAU81jdi-c/hqdefault.jpg",
      },
      {
        title: "Jogo com JavaScript #01: Criando um Flappy Bird do ZERO!!!",
        url: "https://www.youtube.com/watch?v=llF6vD-RljE",
        thumb: "https://img.youtube.com/vi/llF6vD-RljE/hqdefault.jpg",
      },
      {
        title: "A Primeira Aula de Flutter Que Todo Mundo Deveria Ter",
        url: "https://www.youtube.com/watch?v=J4BVaXkwmM8",
        thumb: "https://img.youtube.com/vi/J4BVaXkwmM8/hqdefault.jpg",
      },
      {
        title: "O QUE SÃO FRAMEWORKS E BIBLIOTECAS? QUAIS AS DIFERENÇAS?",
        url: "https://www.youtube.com/watch?v=dp0zB4n3MUs",
        thumb: "https://img.youtube.com/vi/dp0zB4n3MUs/hqdefault.jpg",
      },
      {
        title:
          "Angular (O Vídeo que Você Precisava para Começar no Framework) // Dicionário do Programador",
        url: "https://www.youtube.com/watch?v=Yf0rC7dERjg",
        thumb: "https://img.youtube.com/vi/Yf0rC7dERjg/hqdefault.jpg",
      },
      {
        title: "Como Foi Programado um App Que Faz Mágica",
        url: "https://www.youtube.com/watch?v=I36seuWUe5s",
        thumb: "https://img.youtube.com/vi/I36seuWUe5s/hqdefault.jpg",
      },
      {
        title:
          "O que todo iniciante em Front End deveria aprender | Como manipular arrays e objetos em JavaScript",
        url: "https://www.youtube.com/watch?v=yS7AcF-xRUg",
        thumb: "https://img.youtube.com/vi/yS7AcF-xRUg/hqdefault.jpg",
      },
      {
        title: "5 Erros Históricos do CSS",
        url: "https://www.youtube.com/watch?v=HNjkqONzGS0",
        thumb: "https://img.youtube.com/vi/HNjkqONzGS0/hqdefault.jpg",
      },
      {
        title:
          "Deploy de Front End ATUALIZADO! | O que eu uso para hospedagem de Front End",
        url: "https://www.youtube.com/watch?v=d9c0r-J6CdM",
        thumb: "https://img.youtube.com/vi/d9c0r-J6CdM/hqdefault.jpg",
      },
    ],
  };

  const playlistNames = Object.keys(playlists);

  return (
    <div className={`${mode}`}>
      <div className="flex flex-[1] flex-col">
        <header>
          {/* Menu */}
          <nav className="flex h-14 flex-row items-center justify-between divide-solid border border-borderBase bg-backgroundLevel1 py-0 px-4">
            <Logo />
            <SearchBar />
            <DarkModeSwitch />
          </nav>

          {/* Banner */}
          <div className="h-56 bg-blue-400 bg-fantasy bg-cover bg-no-repeat"></div>

          {/* Perfil Pessoal */}
          <div className="flex w-full items-center gap-4 bg-backgroundLevel1 py-4 px-8">
            <img
              src="https://github.com/cainanneves.png"
              className="h-20 w-20 rounded-[50%]"
            ></img>
            <div className="text-textColorBase">
              <h2 className="text-2xl font-bold">Cainan</h2>
              <p>Desenvolvedor WEB</p>
            </div>
          </div>
        </header>

        <main className="w-full flex-[1] overflow-hidden bg-backgroundBase p-4">
          {playlistNames.map((playlistName) => {
            const videos = playlists[playlistName];

            return (
              <div
                key={playlistName}
                className="w-full overflow-hidden p-4 text-textColorBase"
              >
                <h2 className="mb-4 text-base font-bold capitalize">
                  {playlistName}
                </h2>
                <div className="scrollbar grid w-videos snap-x snap-mandatory auto-cols-custom grid-flow-col grid-cols-custom gap-4 overflow-x-scroll">
                  {videos
                    // .filter((video) => {
                    //   const titleNormalizes = video.title.toLowerCase();
                    //   // const searchValueNormalized = searchValue.toLowerCase()
                    //   // return titleNormalized.includes(searchValueNormalized)
                    // })
                    .map((video) => {
                      return (
                        <a
                          className="snap-start"
                          key={video.url}
                          href={video.url}
                        >
                          <img
                            className="aspect-video h-auto w-full max-w-[210px] object-cover font-medium"
                            src={video.thumb}
                          />
                          <span className="block pt-2 pr-6 text-textColorBase">
                            {video.title}
                          </span>
                        </a>
                      );
                    })}
                </div>
              </div>
            );
          })}

          <div className="text-textColorBase">Favoritos aqui</div>
        </main>
      </div>
    </div>
  );
}
