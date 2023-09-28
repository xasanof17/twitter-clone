"use client";
import { FC, Dispatch, SetStateAction } from "react";
import { DropdownMenuCheckboxItem } from "../ui/dropdown-menu";
import { CheckIcon, LucideIcon } from "lucide-react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

type TDropdownMenuItem = {
  check: Checked;
  setCheck: Dispatch<SetStateAction<Checked>>;
  Icon: LucideIcon;
  title: "Everyone" | "People you follow" | "Only people you mention";
};

export const DropdownMenuItem: FC<TDropdownMenuItem> = ({
  check,
  setCheck,
  Icon,
  title,
}) => {
  return (
    <DropdownMenuCheckboxItem
      checked={check}
      onCheckedChange={setCheck}
      className="hover:bg-slate-100"
      style={{
        padding: "7px 16px",
      }}
    >
      <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-twitter">
        <Icon size={20} color="white" />
      </div>
      <p className="flex-1 text-[15px] font-medium text-black m:text-base">
        {title}
      </p>
      {check && <CheckIcon size={18} className="text-twitter" />}
    </DropdownMenuCheckboxItem>
  );
};
