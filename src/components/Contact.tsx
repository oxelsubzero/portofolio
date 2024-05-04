import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="mt-12">
      <p className="text-3xl font-bold">Telle me about your project</p>
      <p className="text-neutral-400 mt-8">
        Send me a message about your project
        <br /> I&apos;ll get back you within 4 hours
      </p>

      <form className="mt-16 w-full border border-neutral-500 rounded-xl md:p-16 p-6 space-y-8">
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="bg-[#121212] px-4 border border-neutral-500 rounded-lg h-12"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="Email"
            className="bg-[#121212] px-4  border border-neutral-500 rounded-lg h-12"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="Message">Message</label>
          <textarea
            id="Message"
            className="bg-[#121212] p-4 border border-neutral-500 rounded-lg h-36"
          />
        </div>
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{ scale: 0.6 }}
          className="border-2 border-neutral-500   rounded-lg text-white p-1 px-4  h-12"
        >
          send message !
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;
