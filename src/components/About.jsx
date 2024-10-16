import aboutImg from "../assets/avento.gif";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-5xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap items-center justify-between md:justify-center lg:pb-10">
        <div className="w-full px-4 lg:w-[45%] lg:p-8">
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -140 }}
            transition={{ duration: 1.2 }}
            className="rounded-2xl lg:h-[370px] lg:w-11/12"
            src={aboutImg}
          />
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 140 }}
          transition={{ duration: 1.2 }}
          className="w-full px-4 lg:w-1/2 lg:p-8"
        >
          <p className="my-2 max-w-2xl py-6 text-justify text-xl -tracking-[.08em] sm:tracking-widest lg:max-w-xl">
            I am a passionate and detail-oriented{" "}
            <span className="font-medium text-emerald-500">
              Front-End Developer
            </span>{" "}
            with a strong foundation in web development technologies such as{" "}
            <span className="font-medium text-emerald-500">
              HTML, CSS, JavaScript, ReactJS, and TypeScript
            </span>
            . I have hands-on experience in building responsive and efficient
            user interfaces,
            <span className="font-medium text-emerald-500">
              {" "}
              utilizing frameworks like Bootstrap and TailwindCSS
            </span>
            . My journey in web development is driven by a desire to
            continuously learn and apply best coding practices to create
            user-friendly web applications. I am now seeking opportunities to
            apply my skills in a dynamic work environment and further develop my
            expertise.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
