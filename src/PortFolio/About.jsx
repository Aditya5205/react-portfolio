import React from "react";

const About = () => {
  return (
    <section
      className="panels about-class flex flex-none shrink-0 snap-start items-center justify-start"
      id="about-id"
    >
      <div className="h-screen w-screen" id="about-card">
        <div className="text-5xl mt-20 ml-28 text-white">
          About{" "}
          <span className="bg-gradient-to-r from-sky-300 to-grad_blue bg-clip-text text-transparent">
            Me
          </span>
        </div>
        <div className="ml-28 h-2/3 w-1/3 text-balance rounded-xl bg-slate-400/50 p-4 text-center text-3xl text-white">
          <p>
            <span className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">
              Hey, This is Aditya Singh,
            </span>
            <br /> an aspiring software developer who derive enjoyment from the
            process of creating various entities.
            <br />
            <br />
          </p>
          <p>
            I have worked on different web technologies such as <br />
            <b className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">
              Reactjs
            </b>
            ,
            <b className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Vuejs
            </b>{" "}
            for frontend and{" "}
            <b className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">
              Python
            </b>
            ,
            <b className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">
              Flask
            </b>{" "}
            for backend.
            <br />
            Also know a thing or two about <br />
            <b className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">
              Machine Learning.
            </b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
