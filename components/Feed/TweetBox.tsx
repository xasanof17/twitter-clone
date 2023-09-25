"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Image as ImageIcon,
  PlaySquare,
  BarChart4,
  SmilePlus,
  CalendarClock,
  LucideIcon,
  Globe2,
} from "lucide-react";

import { useState } from "react";
import { DropdownMenuBox } from "./DropdownMenuBox";

type Widget = {
  Icon: LucideIcon;
  title: "Image" | "Gif" | "Poll" | "Emoji" | "Schedule";
};

const widgets: Widget[] = [
  {
    Icon: ImageIcon,
    title: "Image",
  },
  {
    Icon: PlaySquare,
    title: "Gif",
  },
  {
    Icon: BarChart4,
    title: "Poll",
  },
  {
    Icon: SmilePlus,
    title: "Emoji",
  },
  {
    Icon: CalendarClock,
    title: "Schedule",
  },
];

const TweetBox = () => {
  const [input, setInput] = useState("");
  return (
    <div className="m:flex-row m:space-y-0 m:space-x-4 flex flex-col items-start space-y-4 border-y p-3 sm:p-5">
      <Link href="/" className="flex items-center justify-center">
        <div className="relative h-10 w-10">
          <Image
            src="https://links.papareact.com/gll"
            alt=""
            fill
            className="rounded-full object-cover"
          />
        </div>
      </Link>
      <form className="flex h-full w-full flex-col">
        <div className="flex flex-1 pb-2">
          <textarea
            onChange={(e) => setInput(e.target.value)}
            rows={3}
            placeholder="What's happening?"
            className="flex-1 resize-none overflow-hidden font-normal outline-none"
          />
        </div>
        <div className="my-3 flex items-center justify-start">
          <DropdownMenuBox />
        </div>
        <div className="flex items-center justify-between border-t pt-2">
          <div className="flex items-center space-x-1">
            {widgets.map(({ Icon, title }, i) => (
              <button
                key={i}
                title={title}
                className="flex items-center justify-center rounded-full p-2 transition-all duration-200 ease-out hover:scale-110 hover:bg-twitter-hover"
              >
                <Icon size={19} className="text-twitter" />
              </button>
            ))}
          </div>
          <button disabled={!input} className="tweet-btn">
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
