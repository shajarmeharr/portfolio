import React, { useEffect, useRef } from "react";

const Projects = ({ setState }) => {
  const projectsRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting && Math.round(entry.intersectionRatio) === 0) {
          setState(2);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      }
    );
    observer.observe(projectsRef.current);
  }, []);
  const content = [
    {
      projectName: "Tour Application",
      src: "./website images/tour_image.png",
      projectUrl: "https://github.com/shajarmeharr/tour_application",
      description:
        "A tour booking application with authorization ,authentication ,email sendign ,file upload functionalities,tour creating and display of tours.Rest Api management full functionalties menas api aliasing",
    },
    {
      projectName: "Exceptional Websites",
      projectUrl: "https://github.com/shajarmeharr/Mern-Parctice1",
      src: "./website images/exceptional.png",
      description:
        "A practice project in Mern stack with complete CRUD and authorization and authentication",
    },
    {
      projectName: "Second Portfolio",
      src: "./website images/britiany1.png",
      description:
        "A simple project in fronted with Tailwindcss for making my second portfolio website by cloning some best avaialable portfolios",
    },
  ];

  return (
    <div
      ref={projectsRef}
      className="  mt-[20vh] flex flex-col gap-4 items-center "
    >
      {/* <h3 className="text-gray-400/50 text-[160px] font-semibold">Projects</h3> */}
      {content.map((el, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              window.open(el.projectUrl, "_blank");
            }}
            className=" text-[rgb(148,163,184)] cursor-pointer group flex max-sm:flex-col p-4 hover:shadow-2xl hover:bg-gray-200/5  hover:rounded-lg gap-5"
          >
            {/* <p className="w-[25%]">09-2023 to 04-2024</p> */}
            <img
              src={el.src}
              alt="project image"
              className="max-sm:w-1/2 sm:w-[25%] sm:h-1/2"
            />
            <div className="sm:w-[75%] max-sm:w-full flex flex-col gap-6">
              <h2 className=" text-slate-200 text-lg group-hover:text-[rgb(109,195,204)]">
                {el.projectName}
              </h2>
              <p>{el.description}</p>
              <ul className="flex gap-3 flex-wrap">
                <li className="text-[rgb(109,195,204)] px-3 py-1 rounded-2xl bg-[rgb(16,46,64)]">
                  javascript
                </li>
                <li className="text-[rgb(109,195,204)] px-3 py-1 rounded-2xl bg-[rgb(16,46,64)]">
                  React.js
                </li>
                <i className="text-[rgb(109,195,204)] px-3 py-1 rounded-2xl bg-[rgb(16,46,64)]">
                  Tailwind css
                </i>
                <i className="text-[rgb(109,195,204)] px-3 py-1 rounded-2xl bg-[rgb(16,46,64)]">
                  Express.js
                </i>
                <i className="text-[rgb(109,195,204)] px-3 py-1 rounded-2xl bg-[rgb(16,46,64)]">
                  Nodejs
                </i>
                <i className="text-[rgb(109,195,204)] px-3 py-1 rounded-2xl bg-[rgb(16,46,64)]">
                  Mongodb
                </i>
                <i className="text-[rgb(109,195,204)] px-3 py-1 rounded-2xl bg-[rgb(16,46,64)]">
                  Mysql
                </i>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
