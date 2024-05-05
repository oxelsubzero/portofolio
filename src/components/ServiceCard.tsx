import { motion } from "framer-motion";
import { ReactNode } from "react";

const ServiceCard = ({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
      initial={{ x: -350, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col border-2 border-neutral-500 overflow-hidden md:w-[500px] h-[500px] rounded-2xl"
    >
      <div className="h-[55%] overflow-y-hidden border-b border-neutral-500">
        {children}
      </div>

      <div className="space-y-4 p-6 ">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-neutral-400 ">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
