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
    <Select onValueChange={handleValue}>
      <SelectTrigger className="w-[300px] ">
        <SelectValue placeholder={`Select ${selectText} `} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {list.map((l, ind) => (
            <SelectItem key={ind} value={l.value}>
              {l.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
