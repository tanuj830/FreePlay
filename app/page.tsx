import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-start items-center h-[80vh] pl-2">
      <div className="w-full lg:w-[50%] flex flex-col gap-4">
        <h1 className="text-5xl font-bold my-2">
          Free<span className=""> Play</span>
        </h1>
        <p className="text-muted-foreground leading-8">
          Discover and Play Games Tailored Just for You.{" "}
        </p>
        <p className="leading-8 text-muted-foreground">
          Looking for a place to indulge in your favorite games or explore new
          ones? Look no further! <span className="text-primary">FreePlay</span>{" "}
          offers a diverse collection of games across genres, ensuring there's
          something for everyone.
        </p>
        <Link href="/games" className="mt-4">
          <Button>Get Started</Button>
        </Link>
      </div>
    </main>
  );
}
