import React from "react";
import { fetchAllGames } from "@/lib/fetchAllGames";
import FetchAllGames from "@/components/game/FetchAllGames";

const page = async () => {
  const games = await fetchAllGames();
  return (
    <>
      <FetchAllGames games={games} />
    </>
  );
};

export default page;
