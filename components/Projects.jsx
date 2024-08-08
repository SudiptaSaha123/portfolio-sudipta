import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <div className="mt-14">
      <h3 className="text-[#000000] text-[1.2rem] sm:text-[1.2rem] font-medium mb-8">
        projects
      </h3>
      <div className="flex sm:flex-row flex-col sm:gap-0 gap-6 justify-between">
        <div className="flex gap-4 ">
          <h3 className="bg-[#000000] text-white py-2 px-4 rounded-xl text-[0.7rem] sm:text-[0.8rem] w-[30%]">
            EdTech <br />
            Platform
          </h3>
          <div className="flex flex-col gap-4 ">
            <p className="w-[80%] text-[0.7rem] sm:text-[0.8rem]">
              A full stack project for an ed-tech platform
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/SudiptaSaha123/studynotion"
                target="_blank"
                className="text-[0.7rem] sm:text-[0.8rem] flex px-4 py-2 bg-black text-white rounded-xl gap-2 items-center cursor-pointer"
              >
                Github
                <MdOutlineArrowOutward className="text-[1rem]" />
              </Link>
              <Link
                href="https://studynotion-puce.vercel.app/"
                target="_blank"
                className="text-[0.7rem] sm:text-[0.8rem] flex px-4 py-2 bg-black text-white rounded-xl gap-2 items-center cursor-pointer"
              >
                Live Project
                <MdOutlineArrowOutward className="text-[1rem]" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <h3 className="bg-[#000000] text-white py-2 px-4 rounded-xl text-[0.7rem] sm:text-[0.8rem] w-[30%]">
            Full Stack
            <br /> Event Platform
          </h3>
          <div className="flex flex-col gap-4 ">
            <p className="w-[80%] text-[0.7rem] sm:text-[0.8rem]">
              A full stack project for an event platform
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/SudiptaSaha123/event_platform"
                target="_blank"
                className="text-[0.7rem] sm:text-[0.8rem] flex px-4 py-2 bg-black text-white rounded-xl gap-2 items-center cursor-pointer"
              >
                Github
                <MdOutlineArrowOutward className="text-[1rem]" />
              </Link>
              <Link
                href="https://event-platform-phi.vercel.app/"
                target="_blank"
                className="text-[0.7rem] sm:text-[0.8rem] flex px-4 py-2 bg-black text-white rounded-xl gap-2 items-center cursor-pointer"
              >
                Live Project
                <MdOutlineArrowOutward className="text-[1rem]" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <h3 className="bg-[#000000] text-white py-2 px-4 rounded-xl text-[0.7rem] sm:text-[0.8rem] w-[30%]">
            Serverless Blog <br /> Website
          </h3>
          <div className="flex flex-col gap-4 ">
            <p className="w-[80%] text-[0.7rem] sm:text-[0.8rem]">
              A blog website with serverless backend
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/SudiptaSaha123/blog-website-serverless-backend"
                target="_blank"
                className="text-[0.7rem] sm:text-[0.8rem] flex px-4 py-2 bg-black text-white rounded-xl gap-2 items-center cursor-pointer"
              >
                Github
                <MdOutlineArrowOutward className="text-[1rem]" />
              </Link>
              <Link
                href="https://blog-website-serverless-backend.vercel.app/"
                target="_blank"
                className="text-[0.7rem] sm:text-[0.8rem] flex px-4 py-2 bg-black text-white rounded-xl gap-2 items-center cursor-pointer"
              >
                Live Project
                <MdOutlineArrowOutward className="text-[1rem]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
