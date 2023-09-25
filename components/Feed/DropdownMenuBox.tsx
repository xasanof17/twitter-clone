"use client";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { AtSignIcon, Globe2Icon, UserPlusIcon } from "lucide-react";
import { DropdownMenuItem } from "./DropdownMenuItem";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export const DropdownMenuBox = () => {
  const initialState: { [key: string]: Checked } = {
    everyone: false,
    peopleYouFollow: false,
    onlyPeopleYouMention: false,
  };

  const [checkboxes, setCheckboxes] = useState(initialState);

  const handleCheckboxChange = (name: string) => {
    const updatedCheckboxes = { ...initialState, [name]: true };
    setCheckboxes(updatedCheckboxes);
  };

  const selectedCheckbox = Object.entries(checkboxes).find(
    ([_, checked]) => checked,
  );

  const selectedTitle = selectedCheckbox
    ? {
        everyone: "Everyone",
        peopleYouFollow: "People you follow",
        onlyPeopleYouMention: "Only people you mention",
      }[selectedCheckbox[0]]
    : "Everyone";
  const SelectedIcon = {
    everyone: Globe2Icon,
    peopleYouFollow: UserPlusIcon,
    onlyPeopleYouMention: AtSignIcon,
  }[selectedCheckbox ? selectedCheckbox[0] : "everyone"];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center space-x-2 rounded-full px-2 outline-none transition-all duration-300 hover:bg-twitter-hover">
          {SelectedIcon && <SelectedIcon size={18} className="text-twitter" />}
          <p className="text-[15px] text-twitter sm:text-base">
            {selectedTitle} can reply
          </p>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="m:w-[320px] w-[280px] rounded-2xl shadow-xl">
        <DropdownMenuLabel>
          <h3 className="text-base">Who can reply?</h3>
          <p className="text-[14px] text-gray-400">
            Choose who can reply to this post. Anyone mentioned can always
            reply.
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          check={checkboxes.everyone}
          setCheck={() => handleCheckboxChange("everyone")}
          Icon={Globe2Icon}
          title="Everyone"
        />
        <DropdownMenuItem
          check={checkboxes.peopleYouFollow}
          setCheck={() => handleCheckboxChange("peopleYouFollow")}
          Icon={UserPlusIcon}
          title="People you follow"
        />
        <DropdownMenuItem
          check={checkboxes.onlyPeopleYouMention}
          setCheck={() => handleCheckboxChange("onlyPeopleYouMention")}
          Icon={AtSignIcon}
          title="Only people you mention"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
