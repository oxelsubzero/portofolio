import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";

const TechStack = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0, scale: 0 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      id="contact"
      className="md:flex grid grid-cols-3 p-8 pt-0 gap-8 mt-16"
    >
      <StackIcon name="nextjs2" />
      <StackIcon name="reactjs" />

      <StackIcon name="tailwindcss" />
      <StackIcon name="js" />
      <StackIcon name="typescript" />
      <StackIcon name="postgresql" />
      <StackIcon name="django" />
      <StackIcon name="python" />

      <StackIcon name="nodejs" />
    </motion.div>
  );
};

export default TechStack;
