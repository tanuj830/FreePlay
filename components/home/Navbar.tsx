import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Gamepad, Gamepad2, Search } from "lucide-react";
import { ThemeButton } from "../theme/themeButton";

const Navbar = () => {
  return (
    <nav className="w-full py-3 ">
      <div className="flex justify-between items-center gap-12">
        <div>
          <Link
            className="flex items-center gap-1 text-xl font-semibold text-primary"
            href={"/"}
          >
            <span>
              <Gamepad2 className="w-7 h-7" />
            </span>
            <span>FreePlay</span>
          </Link>
        </div>
        <div>
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
