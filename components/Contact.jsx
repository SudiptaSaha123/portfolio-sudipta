import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="mt-4 sm:mt-10 sm:mb-0 mb-20">
      <h3 className="text-[#000000] text-[1.2rem] sm:text-[1.2rem] font-medium mb-8">
        contact / socials
      </h3>

      <div className="flex flex-col w-[30%] gap-2">
        <div className="flex justify-between text-[0.9rem] sm:text-[1rem] sm:gap-0 gap-10">
          <div>Github</div>
          <Link
            href={"https://github.com/SudiptaSaha123"}
            target="_blank"
            className="flex items-center gap-2 cursor-pointer"
          >
            SudiptaSaha123
            <MdOutlineArrowOutward className="text-[1rem]" />
          </Link>
        </div>

        <div className="flex justify-between text-[0.9rem] sm:text-[1rem] sm:gap-0 gap-10">
          <div>LinkedIn</div>
          <Link
            href={"https://www.linkedin.com/in/mesudiptasaha/"}
            target="_blank"
            className="flex items-center gap-2 cursor-pointer"
          >
            mesudiptasaha
            <MdOutlineArrowOutward className="text-[1rem]" />
          </Link>
        </div>

        <div className="flex justify-between text-[0.9rem] sm:text-[1rem] sm:gap-0 gap-10">
          <div>Twitter</div>
          <Link
            href={"https://x.com/mesudiptasaha"}
            target="_blank"
            className="flex items-center gap-2 cursor-pointer"
          >
            mesudiptasaha
            <MdOutlineArrowOutward className="text-[1rem]" />
          </Link>
        </div>

        <div className="flex justify-between text-[0.9rem] sm:text-[1rem] sm:gap-0 gap-10">
          <div>Email</div>
          <Link
            href="mailto:sudiptasaha883@gmail.com"
            className="flex items-center gap-2 cursor-pointer"
          >
            sudiptasaha883@gmail.com
            <MdOutlineArrowOutward className="text-[1rem]" />
          </Link>
        </div>

        <div className="flex sm:justify-between text-[0.9rem] sm:text-[1rem] sm:gap-0 gap-10">
          <div>Resume</div>
          <Link
            href="https://drive.google.com/file/d/1xln4qRfNMj0BKl4vEsLonhGdpKKLTJMa/view"
            target="_blank"
            className="flex items-center gap-2 cursor-pointer"
          >
            sudiptasaha
            <MdOutlineArrowOutward className="text-[1rem]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
