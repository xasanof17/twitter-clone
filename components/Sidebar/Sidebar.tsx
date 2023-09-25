"use client";
import { Search } from "lucide-react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Sidebar() {
  return (
    <div className="sticky right-0 top-0 col-span-2 hidden lg:flex flex-col">
      <div className="mt-3 flex items-center space-x-2 rounded-full bg-gray-100 p-3">
        <button className="flex items-center justify-center">
          <Search size={25} className="text-gray-600" />
        </button>
        <input
          type="text"
          placeholder="Search twitter"
          className="flex-1 bg-transparent outline-none"
        />
      </div>
      <div className="my-3">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="xasanof17"
          options={{ height: 500, width: "100%" }}
        />
      </div>
    </div>
  );
}
export default Sidebar;
