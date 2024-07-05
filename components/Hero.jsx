import Projects from "./Projects";
import Skills from "./Skills";
import Socials from "./Socials";
import Footer from "./Footer";
import Resume from "./Resume";
import EmailMe from "./EmailMe";
import Contact from "./Contact";

const Hero = () => {
  return (
    <div className="bg-[#e9e9e9] px-10 py-10">
      <h1 className="text-[#000000] font-semibold text-[1.6rem] sm:text-[2rem]">
        Sudipta Saha
      </h1>
      <h3 className="text-[#000000] text-[0.8rem] sm:text-[0.9rem] mt-2">
        a fullstack web developer & a web designer
      </h3>

      <Socials />

      <div className="mt-14 flex flex-col gap-4 text-left">
        <h3 className="text-[#000000] text-[1.2rem] sm:text-[1.2rem] font-medium">
          about me
        </h3>
        <p className="text-[#000000] text-[0.65rem] sm:text-[0.9rem] w-full sm:w-[95%]">
          I am a Full Stack Web Developer with a passion in web design. My focus
          is to build web solutions that seamlessly integrate design and
          functionality, ensuring every project is both visually appealing and
          highly functional.{" "}
        </p>
        <div className="flex gap-4 mt-4">
          <Resume />
          <EmailMe />
        </div>
      </div>

      <Skills />
      <Projects />
      <div className="mt-[3rem] sm:mt-[6rem] w-full h-[0.1rem] bg-black opacity-5"></div>
      <div className="relative sm:mb-0">
        <Contact />
        <div className="sm:absolute -bottom-[0.5rem] right-0 text-black text-[2rem]  sm:text-[4.3rem] opacity-10 z-30">
          sudipta saha
        </div>
      </div>
    </div>
  );
};

export default Hero;
