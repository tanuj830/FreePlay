"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Combobox } from "@/components/ui/combobox";
import { byPlatform } from "@/constants/byPlatform";
import { byCategories } from "@/constants/byCategories";
import {
  fetchGameByCategories,
  fetchGameByPlatform,
} from "@/lib/fetchAllGames";
import axios from "axios";
import { Loader2 } from "lucide-react";

interface FetchAllGamesProps {
  games: Array<{
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    description: string;
    game_url: string;
    status: string;
    release_date: string;
    developer: string;
    publisher: string;
    platform: string;
    genre: string;
    minimum_system_requirements: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    };
  }>;
}
type game = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  status: string;
};
const FetchAllGames = ({ games }: FetchAllGamesProps) => {
  const [filteredData, setFilteredData] = React.useState([] as any[]);
  const [value, setValue] = React.useState<string>("");
  const [combox, setCombox] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  useEffect(() => {
    if (combox === "Platform") {
      setLoading(true);
      const options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        params: {
          platform: value,
        },
        headers: {
          "X-RapidAPI-Key":
            "b8fbf23572msh5937faec3ef7c60p1d7c92jsnfb7c9fddb975",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };
      const res = axios.request(options).then((res) => {
        setFilteredData(res.data);

        setLoading(false);
      });
    } else if (combox === "Category") {
      setLoading(true);
      const options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        params: {
          category: value,
        },
        headers: {
          "X-RapidAPI-Key":
            "b8fbf23572msh5937faec3ef7c60p1d7c92jsnfb7c9fddb975",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      const res = axios.request(options).then((res) => {
        setFilteredData(res.data);

        setLoading(false);
      });
    }
    console.log(filteredData);
  }, [value, setCombox]);

  return (
    <div className="transition-all duration-1000 w-full">
      <div className="pb-3 w-full">
        <div className="flex justify-between items-center w-full pb-3">
          <div className="w-full">
            <span className="text-muted-foreground text-xs">home/games</span>
            {loading === true ? (
              <span className="flex gap-1 items-center pb-4 text-sm ">
                <Loader2 className="animate-spin w-5 h-5" />

                <span>Loading </span>
              </span>
            ) : (
              <span className="text-xs md:text-sm  text-muted-foreground pb-4 flex items-center underline underline-offset-2 ">
                <span>
                  {" "}
                  Results for{" "}
                  <span className="text-primary">
                    {value.length === 0 ? "all" : value}
                  </span>
                </span>
              </span>
            )}
          </div>
          <div className="py-5 flex items-center gap-1 md:gap-3 justify-end w-full ">
            <Combobox
              setValue={setValue}
              setCombobox={setCombox}
              value={value}
              selectText={"Platform"}
              list={byPlatform}
            />
            <Combobox
              setCombobox={setCombox}
              setValue={setValue}
              value={value}
              selectText={"Category"}
              list={byCategories}
            />
          </div>
        </div>

        <div className="relative">
          {filteredData?.length > 0 ? (
            <>
              <div className="grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 relative">
                {filteredData.map((game: game) => (
                  <Link
                    aria-disabled="true"
                    key={game.id}
                    href={`/games/${game.id}`}
                  >
                    <div className="relative">
                      {game.genre.length > 0 ? (
                        <span className="bg-primary text-primary-foreground text-xs px-2  absolute top-2 left-2 rounded-full ">
                          {game.genre}
                        </span>
                      ) : null}
                      <img
                        src={game.thumbnail}
                        alt="thumbnail"
                        className="rounded-md"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 relative">
              {games.map((game: game) => (
                <Link key={game.id} href={`/games/${game.id}`}>
                  <div className="relative">
                    {game.genre.length > 0 ? (
                      <span className="bg-primary text-primary-foreground text-xs px-2  absolute top-2 left-2 rounded-full z-10">
                        {game.genre}
                      </span>
                    ) : null}
                    <img
                      src={game.thumbnail}
                      alt="thumbnail"
                      className="rounded-md"
                    />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FetchAllGames;
