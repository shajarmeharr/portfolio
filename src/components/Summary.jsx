import React, { useEffect, useRef } from "react";

const Summary = ({ setState }) => {
  const summaryRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observer) => {
        // console.log(entry);
        if (entry.isIntersecting && Math.round(entry.intersectionRatio) === 0) {
          // console.log("zero percent ode is runnig");
          setState(0);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      }
    );
    observer.observe(summaryRef.current);
  }, []);
  return (
    <div
      ref={summaryRef}
      className="text-[rgb(148,163,184)] text-lg   flex flex-col gap-6"
    >
      <p>
        Hi, I'm Shajar Abbas, a passionate and dedicated web developer with a
        strong foundation in the MERN stack (MongoDB, Express.js, React.js,
        Node.js) and Next.js. With a keen interest in creating dynamic,
        responsive, and user-friendly web applications, I bring a blend of
        technical skills and creativity to every project I undertake.
      </p>
      <p className="text-xl">My Skills</p>
      <ul className="flex flex-col gap-6">
        <li>
          <span className="text-xl">Mern Stack </span>:Proficient in developing
          full-stack applications using MongoDB for database management,
          Express.js and Node.js for server-side development, and React.js for
          building interactive user interfaces
        </li>
        <li>
          <span className="text-xl">Next.js </span>:Experienced in utilizing
          Next.js for server-side rendering and static site generation to create
          highly performant and SEO-friendly web applications.
        </li>
        <li>
          <span className="text-xl">Sql Database </span>: Competent in
          designing, managing, and querying relational databases using SQL to
          ensure data integrity and efficient retrieval.
        </li>
        <li>
          <span className="text-xl">Tailwind css </span>:Skilled in using
          Tailwind CSS to create responsive and visually appealing designs with
          utility-first CSS classes, ensuring consistency and ease of
          maintenance.
        </li>
      </ul>
    </div>
  );
};

export default Summary;
