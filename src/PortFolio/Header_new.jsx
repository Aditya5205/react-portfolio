import React from "react";

const Header_new = ({ handleNavigation, activePage }) => {
  // const [small, setSmall] = useState(false);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", () => setSmall(window.scrollY > 300));
  //   }
  // }, []);

  return (
    <>
      <header
        className={`fixed flex h-20 z-50 w-full flex-none items-center justify-center bg-current`}
      >
        <nav
          className={`flex list-none flex-wrap gap-x-16 border-white border rounded-full px-10 py-3 `}
        >
          <li
            className={`cursor-pointer text-2xl font-bold ${
              activePage === "home"
                ? "translate-y-1 ease-in-out text-white"
                : " bg-gradient-to-r from-sky-300 to-grad_blue bg-clip-text text-transparent"
            }`}
          >
            <a href="home" onClick={(e) => handleNavigation(e, 0)}>
              Home
            </a>
          </li>

          <li
            className={`cursor-pointer text-2xl font-bold ${
              activePage === "about"
                ? "translate-y-1 ease-in-out text-white"
                : " bg-gradient-to-r from-sky-300 to-grad_blue bg-clip-text text-transparent"
            }`}
          >
            <a href="about" onClick={(e) => handleNavigation(e, 1)}>
              About
            </a>
          </li>

          <li
            className={`cursor-pointer text-2xl font-bold ${
              activePage === "projects"
                ? "translate-y-1 ease-in-out text-white"
                : " bg-gradient-to-r from-sky-300 to-grad_blue bg-clip-text text-transparent"
            }`}
          >
            <a href="projects" onClick={(e) => handleNavigation(e, 2)}>
              Projects
            </a>
          </li>

          <li
            className={`cursor-pointer text-2xl font-bold ${
              activePage === "contact"
                ? "translate-y-1 ease-in-out text-white"
                : " bg-gradient-to-r from-sky-300 to-grad_blue bg-clip-text text-transparent"
            }`}
          >
            <a href="contact" onClick={(e) => handleNavigation(e, 3)}>
              Contact Me
            </a>
          </li>
        </nav>
      </header>
    </>
  );
};

export default Header_new;
