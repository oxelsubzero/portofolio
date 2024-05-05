import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <motion.div
      /*initial={{ opacity: 0, x: -1000 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
      }}*/
      className=" flex gap-8 items-start  md:mt-[200px] mt-[50px] "
    >
      <Image
        src="/images.jpeg"
        alt="profile"
        width={100}
        height={20}
        className="rounded-full  ml-4 hidden md:block"
      />
      <div className="border rounded-xl border-neutral-500 h-full  text-xl space-y-8 w-full md:p-12 p-4 md:text-justify">
        <p>Hi, I&apos;m Miguel</p>
        <p>
          A pasionnate web developer specialized in building dynamic and
          responsives websites.I&apos;ve honed my skills in front-end and
          back-end development, mastering typescript and python and frameworks
          like nextjs and reactjs to create seamless online experiences.
        </p>
        <p></p>
        <p>
          With a focus on efficiency and affordability, I strive to deliver
          projects on time and within budget, without compromising on quality.
          Whether you&apos;re a startup looking to establish a digital presence
          or an established business seeking to revamp your online platform,
          I&apos;m here to help you achieve your goals.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
