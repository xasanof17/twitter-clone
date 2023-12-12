import { LinkType } from "@/types";
import {
  Home,
  Search,
  Bell,
  Mail,
  Mails,
  Bookmark,
  MessageCircle,
  User,
  MoreHorizontal,
} from "lucide-react";

export const links: LinkType[] = [
  {
    Icon: Home,
    title: "Home",
    href: "/",
  },
  {
    Icon: Search,
    title: "Explore",
    href: "/explore",
  },
  {
    Icon: Bell,
    title: "Notifications",
    href: "/notifications",
  },
  {
    Icon: Mail,
    title: "Messages",
    href: "/messages",
  },
  {
    Icon: Mails,
    title: "Lists",
    href: "/lists",
  },
  {
    Icon: Bookmark,
    title: "Bookmarks",
    href: "/bookmarks",
  },
  {
    Icon: MessageCircle,
    title: "Communities",
    href: "/communities",
  },
  {
    Icon: User,
    title: "Profile",
    href: "/profile",
  },
];
