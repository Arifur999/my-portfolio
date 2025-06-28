import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaGithub, FaServer, FaExternalLinkAlt } from "react-icons/fa";

const MyProject = () => {
  return (
    <>
<section className="text-white px-4 py-20">
  <div className="max-w-6xl mx-auto">
    {/* Section Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 drop-shadow-lg">
        My Featured Project
      </h2>
      <p className="text-gray-400 mt-2 text-sm">
        Here's a showcase of one of my full-stack projects with key challenges.
      </p>
    </div>

    {/* Main Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Side Content */}
      <div>
        <h3 className="text-3xl font-bold mb-4 text-cyan-400">NestMate</h3>
        <p className="mb-4 text-gray-300">
          NestMate is a full-stack roommate and item-sharing platform where users can post available living spaces, search for roommates, and book or add listings. The app features secure authentication, responsive design, and protected routes to ensure a seamless user experience.
        </p>

        <div>
          <h4 className="text-xl font-semibold text-purple-400 mb-2">
            Challenges I Faced:
          </h4>
          <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
            <li>Implementing search, sort, and filter functionality for public posts</li>
            <li>Handling protected routes using Firebase and conditional rendering</li>
            <li>Creating a dynamic dashboard with sidebar layout and nested routes</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <a
            href="https://github.com/Arifur999/NestMate"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 text-white text-sm px-3 py-2 rounded flex items-center gap-2 hover:bg-cyan-600 transition"
          >
            <FaGithub /> Client
          </a>
          <a
            href="https://github.com/Arifur999/NestMate-server"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 text-white text-sm px-3 py-2 rounded flex items-center gap-2 hover:bg-purple-600 transition"
          >
            <FaServer /> Server
          </a>
          <a
            href="https://nestmate-d0439.web.app/"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 text-white text-sm px-3 py-2 rounded flex items-center gap-2 hover:bg-green-600 transition"
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>

      {/* Right Side Swiper */}
      <div>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <SwiperSlide>
            <img
              src="/ss1.png"
              alt="Project Screenshot 1"
              className="w-full h-64 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/ss2.png"
              alt="Project Screenshot 2"
              className="w-full h-64 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/ss3.png"
              alt="Project Screenshot 3"
              className="w-full h-64 object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</section>
<section className="text-white px-4 py-20">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Side Content */}
      <div>
        <h3 className="text-3xl font-bold mb-4 text-cyan-400">ServeNow</h3>
        <p className="mb-4 text-gray-300">
          ServeNow is a full-stack volunteer management platform that simplifies how organizations post volunteer needs and how people can join. It includes role-based access, protected routes, authentication, and live slot management.
        </p>

        <div>
          <h4 className="text-xl font-semibold text-purple-400 mb-2">Challenges I Faced:</h4>
          <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
            <li>Firebase token validation with Express middleware for route protection</li>
            <li>Volunteer slot management with atomic MongoDB <code>$inc</code> operations</li>
            <li>Dark/light theme toggle with full responsive design</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <a
            href="https://github.com/Arifur999/ServeNow"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 text-white text-sm px-3 py-2 rounded flex items-center gap-2 hover:bg-cyan-600 transition"
          >
            <FaGithub /> Client
          </a>
          <a
            href="https://github.com/Arifur999/ServeNow-server"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 text-white text-sm px-3 py-2 rounded flex items-center gap-2 hover:bg-purple-600 transition"
          >
            <FaServer /> Server
          </a>
          <a
            href="https://serve-now-ac6f5.web.app/"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 text-white text-sm px-3 py-2 rounded flex items-center gap-2 hover:bg-green-600 transition"
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>

      {/* Right Side Swiper */}
      <div>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <SwiperSlide>
            <img
              src="/ss4.png"
              alt="Project Screenshot 1"
              className="w-full h-64 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/ss5.png"
              alt="Project Screenshot 2"
              className="w-full h-64 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/ss6.png"
              alt="Project Screenshot 3"
              className="w-full h-64 object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</section>

    <section className=" text-white px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side Content */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-cyan-400">ServeNow</h3>
            <p className="mb-4 text-gray-300">
              ServeNow is a full-stack volunteer management web application where users can post volunteer needs and others can participate in them. It supports authentication, protected routes, and user role-based features.
            </p>


            <div>
              <h4 className="text-xl font-semibold text-purple-400 mb-2">
                Challenges I Faced:
              </h4>
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                <li>Securing API endpoints using Firebase token verification in Express</li>
                <li>Managing volunteer slots dynamically with MongoDB <code>$inc</code></li>
                <li>Implementing dark/light theme toggle with full responsive layout</li>
              </ul>
            </div>
                        {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/your-username/serve-client"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 text-white text-sm px-3 py-2 rounded flex items-center gap-2 hover:bg-cyan-600 transition"
              >
                <FaGithub /> Client
              </a>
              <a
                href="https://github.com/your-username/serve-server"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 text-white text-sm px-3 py-2 rounded flex items-center gap-2 hover:bg-purple-600 transition"
              >
                <FaServer /> Server
              </a>
              <a
                href="https://serve-now.web.app"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 text-white text-sm px-3 py-2 rounded flex items-center gap-2 hover:bg-green-600 transition"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>

          </div>

          {/* Right Side Swiper */}
          <div>
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <SwiperSlide>
                <img
                  src="/images/project1.png"
                  alt="Project Screenshot 1"
                  className="w-full h-64 object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/project2.png"
                  alt="Project Screenshot 2"
                  className="w-full h-64 object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/project3.png"
                  alt="Project Screenshot 3"
                  className="w-full h-64 object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default MyProject;
