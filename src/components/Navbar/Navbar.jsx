import { useState } from "react";
import { Link, NavLink } from "react-router"; 
import { FaDownload, FaBars, FaTimes, FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import logo from "/my-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-cyan-400 font-semibold flex items-center gap-2" : "hover:text-cyan-300 flex items-center gap-2"
        }
      >
        <FaHome /> Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-cyan-400 font-semibold flex items-center gap-2" : "hover:text-cyan-300 flex items-center gap-2"
        }
      >
        <FaUser /> About
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? "text-cyan-400 font-semibold flex items-center gap-2" : "hover:text-cyan-300 flex items-center gap-2"
        }
      >
        <FaProjectDiagram /> Projects
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-cyan-400 font-semibold flex items-center gap-2" : "hover:text-cyan-300 flex items-center gap-2"
        }
      >
        <FaEnvelope /> Contact
      </NavLink>
    </>
  );

  return (
    <div className="bg-gradient-to-r from-purpleDark to-purpleDeep shadow-md sticky top-0 z-50 font-medium">
      <div className="navbar max-w-7xl mx-auto px-4 py-3">
        {/* Logo */}
        <div className="flex-1">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-28 sm:w-32 md:w-40 h-18 object-cover  "
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-base items-center">{navLinks}</div>

        {/* Resume Button */}
        <div className="hidden md:block ml-4">
          <a
            href="/resume.pdf"
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
            href="/resume.pdf"
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
