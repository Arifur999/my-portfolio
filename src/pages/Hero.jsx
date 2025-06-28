import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from "react-icons/fa";
// import profileImg from "../assets/profile.png"; 

const Hero = () => {
  return (
    <section className=" flex items-center justify-center lg:py-16 md:pb-10 py-6 ">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
        {/* === Left Content === */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-lg text-cyan-400 tracking-widest uppercase">Hello, I’m</h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 drop-shadow-md">
            Arifur Rahman
          </h1>

          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300">
            Full-Stack <span className="text-cyan-400">MERN</span> Developer
          </h3>

          <p className="text-gray-400 max-w-xl mx-auto md:mx-0">
            I specialize in creating fast, scalable, and interactive web applications using modern tech like React, Node.js, MongoDB, and TailwindCSS.
          </p>

          {/* === Buttons === */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a
              href="/resume.pdf"
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
          </div>

          {/* === Socials === */}
          <div className="flex gap-6 justify-center md:justify-start pt-4 text-2xl text-cyan-400">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          </div>
        </div>

        {/* === Right Image === */}
        <div className="flex-1 flex justify-center relative">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-500 p-1 shadow-2xl animate-pulse">
            <img
            //   src={profileImg}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-[#0f172a]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
