const About = () => {
  return (
    <section
      id="about"
      className=" flex items-center justify-center  text-white px-4 lg:pb-16 md:pb-10 pb-6"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 drop-shadow-lg">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          I’m <span className="text-cyan-400 font-semibold">Arifur Rahman</span>,
          a passionate <span className="text-purple-400 font-semibold">Full Stack MERN Developer</span> who enjoys turning ideas into real, interactive, and user-friendly web applications.
        </p>

        <p className="text-gray-400 text-base leading-relaxed">
          My programming journey started with trial and error—literally. I used to
          get stuck often, faced frustrating bugs, and had to refresh the browser
          again and again until things worked. But instead of giving up, I kept
          learning, searching, testing, and solving.
        </p>

        <p className="text-gray-400 text-base leading-relaxed">
          These experiences taught me
          <span className="text-cyan-300 font-medium"> patience and self-reliance</span>. Now I actually enjoy facing
          bugs and fixing them! Coding is something I truly love.
        </p>

        <p className="text-gray-300 text-base leading-relaxed">
          I also love to <span className="text-cyan-400">work on time</span> and
          complete tasks in a clean and professional manner. I'm focused,
          detail-oriented, and passionate about growing every single day.
        </p>
      </div>
    </section>
  );
};

export default About;
