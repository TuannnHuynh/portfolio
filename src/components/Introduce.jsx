import intro from "../assets/introduce.gif";
import { motion } from "framer-motion";

const contentAnimation = (duration, delay) => ({
  hidden: { x: -120, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: duration, delay: delay },
  },
});

const Introduce = () => {
  return (
    <div className="lg:mb-35 border-b border-neutral-900 px-4 pb-4 lg:px-8">
      <div className="flex flex-wrap md:items-center lg:mb-10">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h2
              variants={contentAnimation(0.8, 0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Anh Tuan
            </motion.h2>
            <motion.span
              variants={contentAnimation(0.8, 0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-[28px] tracking-tight text-transparent sm:text-4xl"
            >
              Aspiring Frontend Developer
            </motion.span>
            <motion.p
              variants={contentAnimation(1, 1.2)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 text-justify text-xl font-light -tracking-[.06em] sm:tracking-tighter"
            >
              I am eager to embark on an internship journey in front-end
              development.{" "}
              <span className="font-medium text-emerald-500">
                With a solid foundation in HTML, CSS, JavaScript, and experience
                in ReactJS, TypeScript, and Redux
              </span>
              , I am ready to contribute to real-world projects and continuously
              grow my skills. Let{"'"}s create beautiful and efficient user
              interfaces together!
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="relative flex justify-center">
            <motion.img
              initial={{ x: 120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-3xl border-2 border-white lg:h-[370px] lg:w-11/12"
              src={intro}
              alt="Anh Tuan"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
