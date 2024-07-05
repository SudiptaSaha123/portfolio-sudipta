import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";

const EmailMe = () => {
  return (
    <Link
      href="mailto:sudiptasaha883@gmail.com"
      className="flex bg-black text-white rounded-xl w-fit py-2 px-8 items-center justify-center gap-4 sm:gap-2 text-[0.7rem] sm:text-[0.8rem] cursor-pointer"
    >
      <MdOutlineMail className=" text-[1rem] sm:text-[1rem]" />
      Email Me
    </Link>
  );
};

export default EmailMe;
