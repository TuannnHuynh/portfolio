import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSquareJs } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-5xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <i className="fa-brands fa-react text-7xl text-cyan-400"></i>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaSquareJs className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoTypescript className="text-7xl text-sky-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiRedux className="text-7xl text-purple-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaBootstrap className="text-7xl text-purple-500" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
