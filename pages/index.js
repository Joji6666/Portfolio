import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import LayOut from "../components/layout";
import Hero from "../components/home/hero";
import Mychar from "../components/home/mychar";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.4,
      }}
    >
      <LayOut>
        <Head>
          <title>김진 포트폴리오</title>
          <meta name="description" content="김진 포트폴리오" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className="flex min-h-screen flex-col items-center justify-center  text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <Hero />
          </div>
        </section>
      </LayOut>
    </motion.div>
  );
}
