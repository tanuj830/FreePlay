import { Button } from "@/components/ui/button";
import { fetchGameByID } from "@/lib/fetchAllGames";
import Link from "next/link";
import React from "react";
import ShowSpecificGame from "@/components/game/ShowSpecificGame";
interface Game {
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
  screenshots: [
    {
      id: number;
      image: string;
    }
  ];
  genre: string;
  minimum_system_requirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
}

const page = async ({ params }: { params: { slug: string } }) => {
  const id = params.slug;

  const game: Game = await fetchGameByID(id);
  return <ShowSpecificGame game={game} />;
};

export default page;
