import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import logo from "/my-logo.png"; // logo path ঠিক করে দাও

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0f2027cf] via-[#203a43c0] to-[#355f72a5] text-gray-300 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:items-start text-center md:text-left">

        {/* Left Side: Logo & Contact Info */}
        <div className="">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-30 h-20 object-cover mx-auto md:mx-0" />

          {/* 2-line Description */}
          <p className="text-sm leading-relaxed">
            Passionate full-stack developer <br />
            from Noakhali, Bangladesh.
          </p>

          {/* Contact Info */}
          <div className="text-sm space-y-1">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-cyan-400" /> arifur.rahman.we@gmail.com
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaPhoneAlt className="text-cyan-400" /> +880 1612 163711
            </p>
          </div>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <h3 className="text-lg font-semibold">Follow Me</h3>
          <div className="flex gap-6 text-2xl">
            <a href="https://github.com/arifur-rahman-we" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-cyan-400 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </a>
            <a href="mailto:arifur.rahman.we@gmail.com">
              <FaEnvelope className="hover:text-cyan-400 transition" />
            </a>
            <a href="https://wa.me/8801612163711" target="_blank" rel="noreferrer">
              <FaWhatsapp className="hover:text-cyan-400 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="pt-6 mt-10 text-xs text-center text-gray-500 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Arifur Rahman. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
