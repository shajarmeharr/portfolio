import React, { useEffect, useRef } from "react";

const Experience = ({ setState }) => {
  const experienceRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting && Math.round(entry.intersectionRatio) === 0) {
          setState(1);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      }
    );
    observer.observe(experienceRef.current);
  }, []);
  return (
    <div ref={experienceRef}>
      <div className=" text-[rgb(148,163,184)] group flex max-sm:flex-col p-4 hover:shadow-2xl hover:bg-gray-200/5  hover:rounded-lg gap-5">
        <p className="max-sm:w-full sm:w-[25%]">09-2023 to 04-2024</p>
        <div className="max-sm:w-full sm:w-[75%] flex flex-col gap-6">
          <h2 className=" text-slate-200 text-lg group-hover:text-[rgb(109,195,204)]">
            Mern Stack Developer at ColocWork Online Near Siddique Trade Center
          </h2>
          <p>
            At ColocWork Online I Work as a Mern stack developer. I Work closely
            with cross sectional teams ,including developers ,designers and
            project managers , to implement and advocate for best practices in
            web accessibility.{" "}
          </p>
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
      <a></a>
    </div>
  );
};

export default Experience;
