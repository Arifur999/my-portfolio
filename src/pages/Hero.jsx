import { FaGithub, FaLinkedin, FaFacebook, FaDownload, FaDiscord } from "react-icons/fa";
import profileImg from "/my-img.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex items-center justify-center lg:py-16 md:pb-10 py-6"
    >
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
        {/* === Left Content === */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-lg text-cyan-400 tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I’m
          </motion.h2>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 drop-shadow-md"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Arifur Rahman
          </motion.h1>

          <motion.h3
            className="text-2xl sm:text-3xl font-semibold text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Full-Stack <span className="text-cyan-400">MERN</span> Developer
          </motion.h3>

          <motion.p
            className="text-gray-400 max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I specialize in creating fast, scalable, and interactive web
            applications using modern tech like React, Node.js, MongoDB, and
            TailwindCSS.
          </motion.p>

          {/* === Buttons === */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="https://drive.google.com/file/d/1zWBLLbANmZ0_Uupldw-0FR5cGeSgjCa1/view?usp=sharing"
              download
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:opacity-90 shadow-lg flex items-center gap-2 transition duration-300"
            >
              <FaDownload /> Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-2 border border-cyan-500 hover:bg-cyan-600 rounded-full text-cyan-300 font-medium transition duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          {/* === Socials === */}
          <motion.div
            className="flex gap-6 justify-center md:justify-start pt-4 text-2xl text-cyan-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="https://github.com/Arifur999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/share/15d4ovn5jm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://discord.gg/v46A3UDp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord />
            </a>
          </motion.div>
        </motion.div>

        {/* === Right Image === */}
        <motion.div
          className="flex-1 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-500 p-1 shadow-2xl animate-pulse">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-[#0f172a]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
