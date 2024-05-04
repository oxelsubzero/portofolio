"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import TechStack from "@/components/TechStack";
import { Variants } from "framer-motion";
const introHeaderVariants: Variants = {
  hide: {
    opacity: 0,
    y: -500,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const introPictureVariants: Variants = {
  hide: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Home() {
  return (
    <div className=" w-screen bg-[#121212] pb-96 text-white ">
      <Navbar />
      <div className="md:px-[20%] px-7">
        <Hero />
        <About />
        <Service />
        <TechStack />
        <Contact />
      </div>
    </div>
  );
}
