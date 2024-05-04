"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-50 md:px-[20%] px-7 text-lg bg-[#121212] h-[54px] flex justify-between   items-center py-8  border-neutral-100">
      <div className={` text-xl `}>Oxel Miguel</div>
      <div className="gap-8 hidden md:flex">
        <div
          className={cn(
            "text-neutral-500 p-1 border-b-2 border-neutral-300 hover:text-white",
            {
              "text-white font-bold border-white": pathname === "/",
            }
          )}
        >
          <Link href="/">Home</Link>
        </div>
        <div
          className={cn(
            "text-neutral-400 p-1 border-b-2 border-neutral-400 hover:text-white",
            {
              "text-white font-bold border-white": pathname === "/projects",
            }
          )}
        >
          <Link href="/projects">Projects</Link>
        </div>
        <div
          className={cn(
            "text-neutral-400 p-1 border-b-2 border-neutral-400 hover:text-white",
            {
              "text-white font-bold border-white": pathname === "/blog",
            }
          )}
        >
          <Link href="/blog">Blog</Link>
        </div>

        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{ scale: 0.6 }}
          className="border-2 rounded-lg 
           p-1 px-4"
        >
          <a href="#contact">Hire me</a>
        </motion.button>
      </div>
      <div className="md:hidden gap-4 flex justify-center items-center">
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{ scale: 0.6 }}
          className="border-2 rounded-lg  
           px-1 text-white text-[14px]  h-8"
        >
          <a href="#contact">Hire me</a>
        </motion.button>
        <Sheet>
          <SheetTrigger>
            <div className="space-y-2 ">
              <div className="h-1 bg-white w-8"></div>
              <div className="h-1 bg-white w-8"></div>
              <div className="h-1 bg-white w-8"></div>
            </div>
          </SheetTrigger>
          <SheetContent className="bg-black text-white ">
            <SheetHeader>
              <SheetDescription className="pt-[30%] space-y-16 flex flex-col justify-center items-center ">
                <div
                  className={cn(
                    "text-neutral-500 p-1 border-b-2 border-neutral-300 hover:text-white w-16",
                    {
                      "text-white font-bold border-white": pathname === "/",
                    }
                  )}
                >
                  <Link href="/">Home</Link>
                </div>
                <div
                  className={cn(
                    "text-neutral-400 p-1 border-b-2 border-neutral-400 hover:text-white w-16",
                    {
                      "text-white font-bold border-white":
                        pathname === "/projects",
                    }
                  )}
                >
                  <Link href="/projects">Projects</Link>
                </div>
                <div
                  className={cn(
                    "text-neutral-400 p-1 border-b-2 border-neutral-400 hover:text-white w-16",
                    {
                      "text-white font-bold border-white": pathname === "/blog",
                    }
                  )}
                >
                  <Link href="/blog">Blog</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
