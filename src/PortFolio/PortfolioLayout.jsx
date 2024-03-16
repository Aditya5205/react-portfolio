import React, { useEffect, useRef, useState } from "react";
import { Home, Header_new, About, Projects, Contact } from "./index.js";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import { ReactLenis } from "@studio-freight/react-lenis";

const PortfolioLayout = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "../script.js";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const comp = useRef();
  const [activePage, setActivePage] = useState("home");
  const { contextSafe } = useGSAP(
    () => {
      let sections = gsap.utils.toArray(".panels");
      let projectSections = gsap.utils.toArray(".project-slides");

      const tl = gsap.timeline();

      tl.from("#home-id-text", {
        xPercent: "100",
        ease: "expo",
        delay: 0.5,
        opacity: 0,
      });

      tl.from("#about-card", {
        scrollTrigger: {
          trigger: "#about-id",
          start: "top center",
          end: "+=200 center",
          scrub: 1,
          // markers: true,
          toggleActions: "play none none pause",
        },
        xPercent: "-50",
      });

      const scroller = gsap.to(projectSections, {
        xPercent: -100 * (projectSections.length - 1),
        ease: "none", // IMPORTANT
        scrollTrigger: {
          trigger: ".projects-container",
          pin: true,
          scrub: 1,
          // markers: true,
          snap: 1 / (projectSections.length - 1),
          end: () =>
            "+=" + document.querySelector(".project-slides").offsetHeight * 3,
        },
      });

      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: `#${section.id}`,
          start: "left center",
          end: `${i === 2 ? "+=400% center" : "right center"}`,
          // markers: true,
          onEnter: () => setActivePage(section.id.slice(0, -3)),
          onEnterBack: () => setActivePage(section.id.slice(0, -3)),
          // id: "section-" + i,
        });
      });

      // ScrollTrigger.observe({
      //   target: window, // can be any element (selector text is fine)
      //   type: "scroll", // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
      //   onUp: () => {},
      //   onDown: () => {},
      //   preventDefault: true,
      //   wheelSpeed: -1,
      // });
    },
    { scope: comp }
  );

  const handleNavigation = (e, i) => {
    e.preventDefault();
    let selectedSlide = e.target.getAttribute("href");
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: `#${selectedSlide}-id`,
      },
      ease: "power1.inOut",
    });
  };

  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
      }}
    >
      <div
        className="min-w-screen main-main-container min-h-screen
        overscroll-y-none "
        ref={comp}
      >
        <canvas className="webgl fixed -z-50"></canvas>
        <Header_new
          handleNavigation={handleNavigation}
          activePage={activePage}
        />

        <div className="main-container">
          <Home />
          <About />
          <div
            className="projects-container panels h-full w-[300%]"
            id="projects-id"
          >
            <div className="text-5xl w-full h-fit absolute mt-20 ml-28 text-white">
              <span className="bg-gradient-to-r from-sky-300 to-grad_blue bg-clip-text text-transparent">
                My{" "}
              </span>
              Projects
            </div>
            <Projects />
          </div>
          <Contact />
        </div>
      </div>
    </ReactLenis>
  );
};

export default PortfolioLayout;
