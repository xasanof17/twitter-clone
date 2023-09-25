import { LinkType } from "@/types";
import Link from "next/link";

const variants = {
  base: "flex items-center justify-center rounded-full px-3 py-3 transition-colors duration-300 md:space-x-2 lg:space-x-4 lg:py-2",
  active: {
    base: "hover:bg-gray-100",
    active: "bg-gray-100",
  },
};

export function HeaderItem({
  link,
  pathname,
}: {
  link: LinkType;
  pathname: string;
}) {
  const { Icon, title, href } = link;
  return (
    <Link href={href} className="flex items-center justify-start">
      <div
        className={`${variants.base} ${
          pathname == href ? variants.active.active : variants.active.base
        }`}
      >
        <Icon
          className={`text-[22px] lg:text-[26px] ${
            pathname == href && "text-twitter"
          }`}
        />
        <p className="hidden text-lg font-medium md:inline lg:text-xl">
          {title}
        </p>
      </div>
    </Link>
  );
}
