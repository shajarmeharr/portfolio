import Experience from "./Experience";
import Projects from "./Projects";
import Summary from "./Summary";

function Detailed({ setState }) {
  return (
    <div
      id="detail"
      className="lg:w-[60%] w-full exmample example::-webkit-scrollbar flex flex-col gap-28 lg:h-full overflow-y-scroll"
    >
      <Summary setState={setState} />
      <Experience setState={setState} />
      <Projects setState={setState} />
    </div>
  );
}

export default Detailed;
