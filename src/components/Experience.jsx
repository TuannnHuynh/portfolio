import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 px-4 pb-4">
      <h2 className="my-20 text-center text-5xl">Experience</h2>
      <div>
        {EXPERIENCES.map((val, idx) => {
          return (
            <div
              key={`exp-${idx + 1}`}
              className="mb-8 flex flex-wrap lg:justify-center"
            >
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">{val.year}</p>
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
