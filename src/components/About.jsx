import aboutImg from "../assets/avento.gif";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-5xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full px-4 lg:w-[45%] lg:p-8">
          <div>
            <img className="rounded-2xl" src={aboutImg} />
          </div>
        </div>
        <div className="w-full px-4 lg:w-[50%] lg:p-8">
          <p className="my-2 max-w-xl py-6 text-justify text-xl -tracking-[.06em] sm:tracking-widest">
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
        </div>
      </div>
    </div>
  );
};

export default About;
