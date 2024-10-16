import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 px-4 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-5xl"
      >
        Experience
      </motion.h2>
      <div className="lg:pb-10">
        {EXPERIENCES.map((val, idx) => {
          return (
            <div
              key={`exp-${idx + 1}`}
              className="mb-8 flex flex-wrap lg:justify-center"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -110 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <p className="mb-2 text-sm text-neutral-400">{val.year}</p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 120 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">
                  {val.role} -{" "}
                  <span className="text-sm text-purple-100">{val.company}</span>
                </h6>
                <p className="mb-4 text-justify -tracking-[.06em] text-neutral-400 sm:tracking-tighter">
                  {val.description}
                </p>
                {val.teachnologies.map((tech, index) => {
                  return (
                    <span
                      className="mr-2 mt-4 rounded bg-neutral-900 py-1 text-sm font-medium text-purple-800"
                      key={`tech-${index + 1}`}
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

export default Experience;
