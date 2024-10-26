import About from "@/components/Landing/About";
import Landing from "@/components/Landing/Landing";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Service from "@/components/Landing/Service";
import Team from "@/components/Landing/Team";
import Blogs from "@/components/Landing/Blogs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${poppins.className}`}>
      <Landing />
      <About />
      <Service />
      <Team />
      <Blogs />
    </div>
  );
}
