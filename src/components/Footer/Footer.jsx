import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
  FaDiscord,
} from "react-icons/fa";
import logo from "/my-logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] text-gray-300 px-4 py-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 text-sm">
        {/* Left: Logo and Info */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-2"
        >
          <img src={logo} alt="Logo" className="w-24 object-contain" />
          <p className="leading-tight">
            Passionate full-stack developer <br />
            from Noakhali, Bangladesh.
          </p>
          <div className="text-xs space-y-1">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-cyan-400" />
              arifur.rahman.we@gmail.com
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaPhoneAlt className="text-cyan-400" />
              +880 1612 163711
            </p>
          </div>
        </motion.div>

        {/* Right: Social Links */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center md:items-end space-y-2"
        >
          <h3 className="font-semibold text-base">Follow Me</h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://github.com/Arifur999"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="hover:text-cyan-400 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/arifur-rahman-org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </a>
            <a href="mailto:arifur.rahman.we@gmail.com">
              <FaEnvelope className="hover:text-cyan-400 transition" />
            </a>
            <a
              href="https://wa.me/8801612163711"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="hover:text-cyan-400 transition" />
            </a>
            <a
              href="https://discord.gg/v46A3UDp"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord className="hover:text-cyan-400 transition" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-6 text-center text-xs text-gray-500 border-t border-gray-600 pt-4"
      >
        &copy; {new Date().getFullYear()} Arifur Rahman. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
