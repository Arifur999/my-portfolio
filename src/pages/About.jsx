import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center text-white px-4 lg:pb-16 md:pb-10 pb-6"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 drop-shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          I’m <span className="text-cyan-400 font-semibold">Arifur Rahman</span>
          , a passionate{" "}
          <span className="text-purple-400 font-semibold">
            Full Stack MERN Developer
          </span>{" "}
          who enjoys turning ideas into real, interactive, and user-friendly web
          applications.
        </motion.p>

        <motion.p
          className="text-gray-400 text-base leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Alongside my academic journey, I genuinely enjoy exploring the world
          of coding. From a very young age, I've had a deep interest in how
          websites and apps work, which naturally drew me towards web
          development.
        </motion.p>

        <motion.p
          className="text-gray-400 text-base leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          These experiences taught me
          <span className="text-cyan-300 font-medium">
            {" "}
            patience and self-reliance
          </span>
          . Now I actually enjoy facing bugs and fixing them! Coding is
          something I truly love.
        </motion.p>

        <motion.p
          className="text-gray-300 text-base leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          I also love to <span className="text-cyan-400">work on time</span> and
          complete tasks in a clean and professional manner. I'm focused,
          detail-oriented, and passionate about growing every single day.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
