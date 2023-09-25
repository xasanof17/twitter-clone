"use client";
import { useState } from "react";
import { RefreshCw } from "lucide-react";

type Props = {
  title: string;
};

const FeedTop = ({ title }: Props) => {
  const [isRefreshing, setIsRefeshing] = useState<boolean>(false);
  const handleRefresh = () => {
    setIsRefeshing(true);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  return (
    <div className="sticky left-0 top-0 z-20 flex w-full items-center justify-between p-3 backdrop-blur-xl">
      <h1 className="text-lg font-bold md:text-xl">{title}</h1>
      <button
        aria-description="Refresh btn to reload the site"
        title="Refresh button"
        type="button"
        onClick={handleRefresh}
        className={`flex items-center justify-center rounded-full p-2 hover:bg-gray-100 ${
          isRefreshing ? "animate-spin" : ""
        }`}
      >
        <RefreshCw className="text-[18px] md:text-[20px]" />
      </button>
    </div>
  );
};

export default FeedTop;
