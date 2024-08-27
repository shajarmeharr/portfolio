import { useEffect, useRef, useState } from "react";
function Intro({ state }) {
  // const introRef = useRef();
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (document.scrollingElement !== introRef.current) {
  //       document.getElementById("detail").scrollBy({
  //         top: "100px",
  //         left: "0px",
  //         behavior: "smooth",
  //       });
  //     }
  //   });
  // }, []);
  return (
    <div
      // ref={introRef}
      className="lg:h-full lg:w-[40%] w-full flex flex-col gap-8 justify-between text-[rgb(226,232,240)]"
    >
      <header>
        <h1 className="max-sm:text-4xl sm:text-6xl max-sm:font-bold sm:font-semibold">
          Shajar Abbas
        </h1>
        <h3 className="mt-4">
          <span className="max-sm:text-base sm:text-lg font-sans font-medium">
            Mern Stack and Next.js Developer
          </span>
        </h3>
      </header>
      <section>
        <ul className="flex flex-col gap-2 lg:gap-4">
          {["ABOUT", "EXPERINCE", "PROJECTS"].map((el, id) => {
            return (
              <li key={id} className="w-fit">
                <a
                  className={` ${
                    id === state ? "text-white" : "text-[rgb(138,153,173)]"
                  }`}
                >
                  {el}
                </a>
              </li>
            );
          })}
        </ul>
      </section>

      <div>
        <ul className="flex gap-6 items-center">
          {[
            {
              href: "mailto:shjmehar400@gamil.com",
              src: "/images/gmail.png",
            },
            {
              href: "https://www.linkedin.com/in/shajar-abbas-46a135292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              src: "/images/linkedin image.png",
            },
            {
              href: "https://github.com/shajarmeharr",
              src: "/images/github.png",
            },
          ].map((el, id) => {
            return (
              <a
                key={id}
                href={`${el.href}`}
                target={`${id === 0 ? "" : "_blank"}`}
              >
                <img
                  src={`${el.src}`}
                  className="rounded-lg"
                  width={id === 0 ? 65 : 50}
                  height={id === 0 ? 65 : ""}
                />
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Intro;
