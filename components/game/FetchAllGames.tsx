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
      const res = axios
        .request(options)
        .then((res) => setFilteredData(res.data));
      setLoading(false);
    } else if (combox === "Categories") {
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

      const res = axios
        .request(options)
        .then((res) => setFilteredData(res.data));
      console.log(filteredData);
      setLoading(false);
    }
  }, [value, setCombox]);

  return (
    <div className="transition-all duration-1000">
      <div className="pb-3">
        <div className="py-5 flex items-center gap-3 justify-start z-[1000]">
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
            selectText={"Categories"}
            list={byCategories}
          />
        </div>

        {filteredData?.length > 0 ? (
          <div className="grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 relative">
            {filteredData.map((game: game) => (
              <Link
                aria-disabled="true"
                key={game.id}
                href={`/games/${game.id}`}
              >
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
  );
};

export default FetchAllGames;
