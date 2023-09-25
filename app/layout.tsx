import "./globals.css";
import type { Metadata } from "next";
import { HomeLayout } from "@/layouts";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page description",
  metadataBase: new URL("https://almudacompan.com"),
  openGraph: {
    type: "website",
    title: "Twitter",
    images: {
      url: "./og.png",
      width: 192,
      height: 192,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HomeLayout children={children} />;
}
