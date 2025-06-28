const Education = () => {
  return (
    <section className="w-full  px-6 py-16 ">
      {/* Section Heading */}
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl pb-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 drop-shadow-lg">
        Education
      </h2>
      </div>

      {/* Education Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 text-center md:text-left">
        {/* Name & Intro */}
        <p className="text-gray-300 leading-relaxed text-lg space-y-6">
          I am currently pursuing my Bachelor of Business Studies (BBS), 2nd year, at Government Saleh Ahmed College, located in Begumganj, Noakhali.  
          This program equips me with a solid foundation in business management, accounting, and economics.  
          I am passionate about applying theoretical knowledge to real-world challenges, developing critical thinking skills, and preparing myself for a successful career in the corporate sector.
          <br />
          The college environment fosters both academic excellence and personal growth, encouraging me to make the most of every opportunity.
        </p>
      </div>
    </section>
  );
};

export default Education;
