import avt from "../assets/avt.jpg";

const Introduce = () => {
  return (
    <div className="lg:mb-35 border-b border-neutral-900 px-4 pb-4 lg:px-8">
      <div className="flex flex-wrap md:items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Anh Tuan
            </h2>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-[28px] tracking-tight text-transparent sm:text-4xl">
              Aspiring Frontend Developer
            </span>
            <p className="my-2 max-w-xl py-6 text-justify text-xl font-light -tracking-[.06em] sm:tracking-tighter">
              I am eager to embark on an internship journey in front-end
              development.{" "}
              <span className="font-medium text-emerald-500">
                With a solid foundation in HTML, CSS, JavaScript, and experience
                in ReactJS, TypeScript, and Redux
              </span>
              , I am ready to contribute to real-world projects and continuously
              grow my skills. Let{"'"}s create beautiful and efficient user
              interfaces together!
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="rounded-[50%]" src={avt} alt="Anh Tuan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
