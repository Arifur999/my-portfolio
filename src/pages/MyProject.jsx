import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaGithub, FaServer, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projectVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const MyProject = () => {
  return (
    <div id="projects">
      {[
        {
          title: "NestMate",
          desc: "NestMate is a full-stack roommate and item-sharing platform...",
          github: "https://github.com/Arifur999/NestMate",
          server: "https://github.com/Arifur999/NestMate-server",
          live: "https://nestmate-d0439.web.app/",
          images: ["/ss1.png", "/ss2.png", "/ss3.png"],
          points: [
            "Implementing search, sort, and filter functionality",
            "Handling protected routes using Firebase",
            "Creating a dynamic dashboard with nested routes",
          ],
        },
        {
          title: "ServeNow",
          desc: "ServeNow is a full-stack volunteer management platform...",
          github: "https://github.com/Arifur999/ServeNow",
          server: "https://github.com/Arifur999/ServeNow-server",
          live: "https://serve-now-ac6f5.web.app/",
          images: ["/ss4.png", "/ss5.png", "/ss6.png"],
          points: [
            "Firebase token validation with Express middleware",
            "Volunteer slot management with $inc",
            "Dark/light theme toggle and responsiveness",
          ],
        },
        {
          title: "Coffee Shop",
          desc: "Coffee Shop is a full-stack CRUD-based web application...",
          github: "https://github.com/Arifur999/coffee-shop",
          server: "https://github.com/Arifur999/coffee-server-site",
          live: "https://funny-salamander-a598a1.netlify.app/coffee/6825f24fa7c3c87fd0a8955c",
          images: ["/ss7.png", "/ss8.png", "/ss9.png"],
          points: [
            "Managing full CRUD operations using Express and MongoDB",
            "Designing dynamic routes for each item",
            "SweetAlert2 for elegant UX feedback",
          ],
        },
      ].map((project, i) => (
        <section
          key={project.title}
          className="text-white px-4 py-20 bg-opacity-5"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={projectVariants}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 drop-shadow-lg">
                {i === 0 ? "My Featured Project" : ""}
              </h2>
              {i === 0 && (
                <p className="text-gray-400 mt-2 text-sm">
                  Here's a showcase of one of my full-stack projects with key
                  challenges.
                </p>
              )}
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={projectVariants}
            >
              {/* Left Content */}
              <div>
                <motion.h3
                  className="text-3xl font-bold mb-4 text-cyan-400"
                  whileHover={{ scale: 1.03 }}
                >
                  {project.title}
                </motion.h3>
                <p className="mb-4 text-gray-300">{project.desc}</p>

                <div>
                  <h4 className="text-xl font-semibold text-purple-400 mb-2">
                    Challenges I Faced:
                  </h4>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                    {project.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-800 text-white text-sm px-3 py-2 rounded flex items-center gap-2 hover:bg-cyan-600 transition"
                  >
                    <FaGithub /> Client
                  </a>
                  <a
                    href={project.server}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-800 text-white text-sm px-3 py-2 rounded flex items-center gap-2 hover:bg-purple-600 transition"
                  >
                    <FaServer /> Server
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-800 text-white text-sm px-3 py-2 rounded flex items-center gap-2 hover:bg-green-600 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>

              {/* Right Image Swiper */}
              <motion.div
                className="rounded-xl overflow-hidden shadow-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                >
                  {project.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        alt={`${project.title} Screenshot ${idx + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default MyProject;
