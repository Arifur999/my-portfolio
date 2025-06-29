import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGithub,
  FaCode,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiVite,
} from "react-icons/si";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Node.js", icon: <FaNode />, color: "text-green-500" },
  { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-300" },
  { name: "Vite", icon: <SiVite />, color: "text-purple-400" },
  { name: "VS Code", icon: <FaCode />, color: "text-blue-400" },
  { name: "GitHub", icon: <FaGithub />, color: "text-white" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-600" },
];

const Skills = () => {
  return (
    <section id="skills" className="text-white px-4 lg:pb-16 md:pb-10 pb-6">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl pb-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 drop-shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          My Skills & Tools
        </motion.h2>

        {/* Line 1 - Left to Right */}
        <Marquee gradient={false} speed={40} pauseOnHover={true} className="mb-6 space-x-6">
          {skills.map((skill, index) => (
            <motion.div
              key={`line1-${index}`}
              whileHover={{ scale: 1.1 }}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#1e293b] border border-cyan-500 rounded-lg p-6 flex flex-col items-center justify-center min-w-[120px] sm:min-w-[140px] mx-2 hover:shadow-[0_0_20px_#00ffe0] transition duration-300"
            >
              <div className={`text-4xl mb-2 ${skill.color}`}>{skill.icon}</div>
              <p className="text-sm font-medium text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </Marquee>

        {/* Line 2 - Right to Left */}
        <Marquee gradient={false} speed={40} direction="right" pauseOnHover={true} className="space-x-6">
          {skills.map((skill, index) => (
            <motion.div
              key={`line2-${index}`}
              whileHover={{ scale: 1.1 }}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#1e293b] border border-cyan-500 rounded-lg p-6 flex flex-col items-center justify-center min-w-[120px] sm:min-w-[140px] mx-2 hover:shadow-[0_0_20px_#00ffe0] transition duration-300"
            >
              <div className={`text-4xl mb-2 ${skill.color}`}>{skill.icon}</div>
              <p className="text-sm font-medium text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
};

export default Skills;
