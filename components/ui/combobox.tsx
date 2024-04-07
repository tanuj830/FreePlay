"use client";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button } from "./button";

interface ComboboxProps {
  list: Array<{
    value: string;
    label: string;
  }>;
  selectText: string;
  setValue: Function;
  setCombobox: Function;
  value: string;
}
export const Combobox = ({
  list,
  selectText,
  setValue,
  setCombobox,
}: ComboboxProps) => {
  const [open, setOpen] = React.useState(false);

  const handleValue = (e: any) => {
    setValue(e);
    setCombobox(selectText);
  };
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className=" ">
        <span
          // variant={"secondary"}
          className="hidden md:block py-2 px-4 text-sm bg-muted rounded-md"
        >{`Select ${selectText} `}</span>
        <span
          // variant={"secondary"}
          className="block md:hidden py-2 px-4 text-sm bg-muted rounded-md"
        >{`${selectText} `}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px] p-2 ">
        {list.map((l, ind) => (
          <DropdownMenuItem
            key={ind}
            onClick={() => handleValue(l.value)}
            className=""
          >
            {l.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
