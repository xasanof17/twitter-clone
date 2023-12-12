import { cn } from "@/lib/utils";
import { LinkType } from "@/types";
import Link from "next/link";

const variants = {
  base: "link",
  active: {
    base: "link",
    active: "link active",
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
      <div className={cn(pathname == href ? "active" : "", "link")}>
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
