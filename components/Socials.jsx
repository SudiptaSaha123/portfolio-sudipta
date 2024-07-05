import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoDownload } from "react-icons/io5";

const Socials = () => {
  return (
    <div className="flex gap-6 bg-[#f1f1f1] w-fit px-6 rounded-xl text-[1.2rem] py-4 mt-6">
      <Link href={"https://github.com/SudiptaSaha123"} target="_blank">
        <FaGithub />
      </Link>
      <Link href={"https://www.linkedin.com/in/mesudiptasaha/"} target="_blank">
        <FaLinkedin />
      </Link>
      <Link href={"https://x.com/mesudiptasaha"} target="_blank">
        <FaSquareXTwitter />
      </Link>
    </div>
  );
};

export default Socials;
