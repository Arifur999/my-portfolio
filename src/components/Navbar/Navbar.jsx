import { useState } from "react";
import {
  FaDownload,
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import logo from "/my-logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <Link
        to="hero"
        smooth={true}
        duration={500}
        offset={-70}
        spy={true}
        activeClass="text-cyan-400 font-semibold"
        className="cursor-pointer hover:text-cyan-300 flex items-center gap-2"
      >
        <FaHome /> Home
      </Link>

      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={-70}
        spy={true}
        activeClass="text-cyan-400 font-semibold"
        className="cursor-pointer hover:text-cyan-300 flex items-center gap-2"
      >
        <FaUser /> About
      </Link>

      <Link
        to="projects"
        smooth={true}
        duration={500}
        offset={-70}
        spy={true}
        activeClass="text-cyan-400 font-semibold"
        className="cursor-pointer hover:text-cyan-300 flex items-center gap-2"
      >
        <FaProjectDiagram /> Projects
      </Link>

      <Link
        to="contact"
        smooth={true}
        duration={500}
        offset={-70}
        spy={true}
        activeClass="text-cyan-400 font-semibold"
        className="cursor-pointer hover:text-cyan-300 flex items-center gap-2"
      >
        <FaEnvelope /> Contact
      </Link>
    </>
  );

  return (
    <div className="bg-gradient-to-r from-purpleDark to-purpleDeep shadow-md sticky top-0 z-50 font-medium">
      <div className="navbar max-w-7xl mx-auto px-4 py-3">
        {/* Logo */}
        <div className="flex-1">
          <Link to="hero" className="flex items-center cursor-pointer">
            <img
              src={logo}
              alt="Logo"
              className="w-28 sm:w-32 md:w-40 h-18 object-cover  "
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-base items-center">
          {navLinks}
        </div>

        {/* Resume Button */}
        <div className="hidden md:block ml-4">
          <a
            href="https://drive.google.com/file/d/10H6aa10IFRQiQN_ISOcwa9DoxPj9SSEz/view?usp=sharing"
            download
            className="btn btn-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center gap-2 shadow-md hover:opacity-90"
          >
            <FaDownload /> Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#1e293b] px-4 pb-4 space-y-3 text-base text-white">
          {navLinks}
          <a
            href="ekhon thik ase vaiya?"
            download
            className="btn btn-sm bg-gradient-to-r from-cyan-500 to-blue-600 w-full flex items-center justify-center gap-2 shadow-md"
          >
            <FaDownload /> Resume
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
