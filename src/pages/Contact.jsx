import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import {
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaDiscord,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          e.target.reset();
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for contacting me. I'll get back to you soon.",
            confirmButtonColor: "#06b6d4",
          });
        },
        (error) => {
          console.log("Email error:", error.text);
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Something went wrong. Please try again.",
            confirmButtonColor: "#ef4444",
          });
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="w-full text-white px-6 lg:py-16 md:pb-10 pb-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.h2
          className="text-4xl sm:text-5xl pb-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 drop-shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Contact Us
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <motion.div
          className="space-y-6"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold border-b-4 border-cyan-400 inline-block pb-2">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg">
            Feel free to reach out through the form or via social platforms. I'm
            always open to connect!
          </p>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-400 text-sm">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan-400" /> Noakhali, Bangladesh
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-cyan-400" /> +880 1612 163711 (Call &
              WhatsApp)
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-cyan-400" />{" "}
              arifur.rahman.we@gmail.com
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-2xl mt-6">
            <a
              href="https://github.com/Arifur999"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="hover:text-cyan-400" />
            </a>
            <a href="mailto:arifur.rahman.we@gmail.com">
              <FaEnvelope className="hover:text-cyan-400" />
            </a>
            <a
              href="https://discord.gg/v46A3UDp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="hover:text-cyan-400" />
            </a>
            <a
              href="https://wa.me/8801612163711"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="hover:text-cyan-400" />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 w-full"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <label className="block mb-2">Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2">Your Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2">Your Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded font-semibold transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
