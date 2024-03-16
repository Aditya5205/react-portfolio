import { slides } from "../assets/data/projectsData.json";

const Projects = () => {
  return (
    <>
      <div className="flex">
        {slides.map((project, i) => (
          <section
            className="h-screen w-screen project-slides flex flex-wrap items-center justify-start"
            key={i}
          >
            <div className="h-3/5 w-1/3 ml-28 text-balance rounded-xl bg-slate-400/50 p-4 text-center text-3xl text-white">
              <div className="w-full h-1/4 flex items-center flex-col text-center">
                <div className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">
                  {project.title}
                </div>
              </div>
              <p className="h-[65%]">{project.body}</p>
              <div className="flex h-fit">
                {project.live !== "" && (
                  <div className="bg-gradient-to-r from-sky-300 to-grad_blue bg-clip-text text-transparent">
                    <a href={`${project.live}`}>Live</a>
                  </div>
                )}
                <a
                  href={`${project.github}`}
                  className="h-10 w-10 ml-auto bg-github_icon rounded-full bg-white bg-cover bg-center bg-no-repeat p-1 hover:opacity-70"
                ></a>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Projects;
