import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { HomeContentCard } from "@/components/HomeContentCard";
// import { HomeContentCard } from "@/components/HomeContentCardV2";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-5">
        <HomeContentCard name="Abdula.raf" />
        <HomeContentCard name="Abdula.raf" />
        <HomeContentCard name="Abdula.raf" />
      </div>

      {/* <div className="w-full h-auto flex justify-center items-center py-5 bg-fuchsia-300">
        <HomeContentCard></HomeContentCard>
      </div> */}
    </>
  );
}
