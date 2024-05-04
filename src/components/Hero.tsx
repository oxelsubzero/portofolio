import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative  z-0 max-w-[1440px]  ">
      <div className="flex-1 md:pt-[100px] pt-[50px] padding-x">
        <h1 className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto 2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold;">
          I&apos;m specialize in developing websites efficiently, affordably,
          and with high quality.
        </h1>

        <p className="text-[27px] text-black-100 font-light mt-5">
          Hi I&apos;m Oxel-Miguel G.
        </p>
        <div className="mt-12  gap-12 hidden md:flex">
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.6 }}
            className="border-2 rounded-lg text-white p-1 px-4"
          >
            <a href="#contact">Hire me</a>
          </motion.button>

          <div className="space-y-2">
            <p className="text-lg ">Nextjs & Nodejs</p>
            <p className="text-neutral-400">Core Tech Stack</p>
          </div>
          <div className="space-y-2">
            <p className="text-lg ">Benin</p>
            <p className="text-neutral-400">Location</p>
          </div>
          <div className="space-y-2">
            <p className="text-lg ">English & French</p>
            <p className="text-neutral-400">Languages</p>
          </div>
          <div className="space-y-2">
            <p className="text-lg ">1 years</p>
            <p className="text-neutral-400">Experience</p>
          </div>
        </div>

        <div className="mt-12  gap-12 md:hidden space-y-12">
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.6 }}
            className="border-2 rounded-lg text-white p-1 px-4 w-full h-12"
          >
            <a href="#contact">Hire me</a>
          </motion.button>
          <div className="flex gap-6 ">
            <div className="space-y-2">
              <p className="text-lg ">Nextjs & Nodejs</p>
              <p className="text-neutral-400">Core Tech Stack</p>
            </div>
            <div className="space-y-2">
              <p className="text-lg ">Benin</p>
              <p className="text-neutral-400">Location</p>
            </div>
            <div className="space-y-2">
              <p className="text-lg ">English & French</p>
              <p className="text-neutral-400">Languages</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
