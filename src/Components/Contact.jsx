import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import FadingSection from "./FadingSection";
import { motion } from "framer-motion";
export default function ContactForm() {
  return (
    <FadingSection className=" py-20 container text-white">
      <SectionHeader title="Contact" />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8 w-full  bg-[#111] p-8 rounded-sm shadow-lg"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border-b-2 border-white py-2 px-1 focus:outline-none focus:border-[#ff6500] transition-all duration-300 placeholder-white"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border-b-2 border-white py-2 px-1 focus:outline-none focus:border-[#ff6500] transition-all duration-300 placeholder-white"
          />

          <textarea
            placeholder="Your Message"
            rows={4}
            className="bg-transparent border-b-2 border-white py-2 px-1 resize-none focus:outline-none focus:border-[#ff6500] transition-all duration-300 placeholder-white"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-4 bg-[#ff6500] text-white font-semibold py-3 rounded-sm shadow-md hover:shadow-xl transition-all"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </FadingSection>
  );
}
