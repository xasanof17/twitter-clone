import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type THomeLayout = {
  children: React.ReactNode;
};

function HomeLayout({ children }: THomeLayout) {
  return (
    <html lang="en">
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
export default HomeLayout;
