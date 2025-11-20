import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

const Resume = () => {
  return (
    <Link
      href="https://drive.google.com/file/d/1_vHOu5W53oIWH1Nes2C3r3ZLggh7ZPkp/view"
      target="_blank"
      className="flex bg-black text-white rounded-xl w-fit py-2 px-8 items-center justify-center gap-4 sm:gap-2 text-[0.7rem] sm:text-[0.8rem] cursor-pointer"
    >
      <LuExternalLink className=" text-[1rem] sm:text-[1rem]" />
      View Resume
    </Link>
  );
};

export default Resume;
