import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "%s - Twitter",
  },
  description: "Home page description",
  metadataBase: new URL(`${baseURL}`),
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="app">
          <Header />
          <main className="main col-span-9 overflow-y-auto border-x sm:col-span-7 lg:col-span-5">
            {children}
          </main>
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
