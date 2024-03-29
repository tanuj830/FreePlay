import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Explore games</h1>
      <Link href="/games">Games</Link>
    </main>
  );
}
