"use client";
import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
        <Button
          variant={"secondary"}
          className="hidden md:block"
        >{`Select ${selectText} `}</Button>
        <Button
          variant={"secondary"}
          className="block md:hidden"
        >{`${selectText} `}</Button>
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
