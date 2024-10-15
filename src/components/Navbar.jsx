const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-2xl font-semibold text-zinc-100 sm:text-3xl">
          AT DEV
        </h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl sm:text-3xl">
        <a href="https://github.com/TuannnHuynh" target="_">
          <i className="fa-brands fa-github cursor-pointer text-zinc-100"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/anh-tuan-dev-1005192b8/"
          target="_"
        >
          <i className="fa-brands fa-linkedin cursor-pointer text-zinc-100"></i>
        </a>
        <a href="https://www.instagram.com/tuann.ddang.ngur/" target="_">
          <i className="fa-brands fa-instagram cursor-pointer text-zinc-100"></i>
        </a>
        <a href="https://www.facebook.com/2k2HAT1/" target="_">
          <i className="fa-brands fa-facebook cursor-pointer text-zinc-100"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
