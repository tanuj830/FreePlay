"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import React from "react";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface Game {
  game: {
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
  };
}

const ShowSpecificGame: React.FC<Game> = ({ game }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const [seeMore, setSeeMore] = React.useState(false);
  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  };
  return (
    <>
      <div className="flex items-center gap-1 py-2">
        <h1 className="font-bold text-2xl">{game.title}</h1>
        <span className="text-[10px] bg-red-500 text-white px-2 rounded-full">
          {game.status}
        </span>
      </div>

      <div className="py-2 flex flex-col l:flex-row gap-4 relative h-full">
        <div className="w-full ">
          <div className="flex  justify-center w-full">
            {game.screenshots.length > 0 ? (
              <Carousel
                plugins={[plugin.current]}
                className="w-full h-full lg:h-[70vh] overflow-hidden"
                // onMouseEnter={plugin.current.stop}
                // onMouseLeave={plugin.current.reset}
              >
                <CarouselContent className="w-full">
                  {game.screenshots?.map((img, index) => (
                    <CarouselItem key={index} className="w-full">
                      <div className="p-1 w-full">
                        <img
                          src={img.image}
                          alt="screenshots"
                          className="rounded-xl object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            ) : (
              <img
                className=" rounded-md shadow-sm fade w-full"
                src={game.thumbnail}
                alt="poster"
              />
            )}
          </div>
          <Link href={game.game_url} target="_blank">
            <Button className="w-full md:w-fit mt-4 ">Launch Game</Button>
          </Link>
        </div>
        <div className="flex gap-4 flex-col md:flex-row mt-10">
          <div className=" w-full md:w-[50%]">
            <div className="bg-secondary p-3 rounded-md  text-muted-foreground">
              <h6 className="font-bold text-lg text-primary">
                About {game.title}
              </h6>
              {/* description */}
              <div className="py-2">
                <span className="text-xs uppercase text-muted-foreground">
                  Description
                </span>
                {seeMore === false ? (
                  <p className="text-sm  ">
                    {game.short_description}{" "}
                    <span onClick={handleSeeMore} className="text-blue-600">
                      see more
                    </span>
                  </p>
                ) : (
                  <p className="text-sm ">
                    {game.description}{" "}
                    <span className="text-blue-600" onClick={handleSeeMore}>
                      see less
                    </span>
                  </p>
                )}
              </div>
              {/* genre */}
              <div className="flex  gap-20">
                <div className="">
                  <div className="text-sm py-3 flex flex-col">
                    <span className="uppercase text-xs">genre</span>{" "}
                    <span>{game.genre}</span>
                  </div>
                  {/* developer */}
                  <div className="text-sm py-3 flex flex-col">
                    <span className="uppercase text-xs">Developer</span>{" "}
                    <span>{game.developer}</span>
                  </div>
                  {/* publisher */}
                  <div className="text-sm py-3 flex flex-col">
                    <span className="uppercase text-xs">Publisher</span>{" "}
                    <span>{game.publisher}</span>
                  </div>
                </div>
                <div>
                  {/* release date */}
                  <div className="text-sm py-3 flex flex-col">
                    <span className="uppercase text-xs">released on</span>{" "}
                    <span>{game.release_date}</span>
                  </div>
                  {/* platform */}
                  <div className="text-sm py-3 flex flex-col">
                    <span className="uppercase text-xs">Platform</span>{" "}
                    <span>{game.platform}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            {game.minimum_system_requirements != null &&
            Object.keys(game.minimum_system_requirements).length > 0 ? (
              <div className="bg-secondary p-3 rounded-md  text-muted-foreground">
                <h6 className="font-bold text-lg text-primary">
                  Minimum System Requirements
                </h6>
                {/* release date */}
                <div className="text-sm py-3 flex flex-col">
                  <span className="uppercase text-xs font-base">
                    operating system
                  </span>{" "}
                  <span>{game.minimum_system_requirements.os}</span>
                </div>
                {/* release date */}
                <div className="text-sm py-3 flex flex-col">
                  <span className="uppercase text-xs font-base">processor</span>{" "}
                  <span>{game.minimum_system_requirements.processor}</span>
                </div>
                {/* release date */}
                <div className="text-sm py-3 flex flex-col">
                  <span className="uppercase text-xs font-base">memory</span>{" "}
                  <span>{game.minimum_system_requirements.memory}</span>
                </div>
                {/* release date */}
                <div className="text-sm py-3 flex flex-col">
                  <span className="uppercase text-xs font-base">storage</span>{" "}
                  <span>{game.minimum_system_requirements.storage}</span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowSpecificGame;
