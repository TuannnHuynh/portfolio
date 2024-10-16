import { PROJECTS } from "../constants";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -120 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-5xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((val, idx) => {
          return (
            <div
              key={`project-${idx + 1}`}
              className="mb-8 flex flex-wrap px-4 sm:px-8 lg:justify-center"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -120 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/4"
              >
                <a
                  className="w-full"
                  href={val.link}
                  target="_"
                  alt={val.title}
                >
                  <img
                    src={val.img}
                    width={200}
                    height={110}
                    alt={val.title}
                    className="mb-6 w-full rounded duration-300 ease-in lg:h-[110px] lg:w-[200px] lg:hover:scale-110"
                  />
                </a>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 120 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">
                  {val.title}{" "}
                  <span className="text-sm text-purple-100">({val.time})</span>
                </h6>
                <p className="mb-2 text-justify text-[15px] -tracking-[.06em] text-neutral-400 sm:tracking-widest">
                  {val.description}
                </p>
                <div className="mb-4 flex text-[15px]">
                  <a
                    className="mr-4 flex items-center duration-300 ease-in hover:text-green-400"
                    href={val.github}
                    target="_"
                  >
                    Github project <FaGithub className="ms-[6px]" />
                  </a>
                  <a
                    className="flex items-center duration-300 ease-in hover:text-green-400"
                    href={val.link}
                    target="_"
                  >
                    Link deloy <FaLink className="ms-[6px]" />
                  </a>
                </div>
                {val.technologies.map((tech) => {
                  return (
                    <span
                      key={tech}
                      className="mb-2 mr-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 sm:mb-0"
                    >
                      {tech}
                    </span>
                  );
                })}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
