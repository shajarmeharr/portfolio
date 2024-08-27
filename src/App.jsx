import { useEffect, useState } from "react";
import Intro from "./components/Intro";
import Detailed from "./components/Deatiled";
import Projects from "./components/Projects";
function App() {
  const [state, setState] = useState(0);
  return (
    <main className="lg:h-screen  flex max-lg:flex-col gap-28 bg-[rgb(15,23,42)] px-6 py-8 lg:px-24 lg:py-20">
      <Intro state={state} />
      <Detailed setState={setState} />
    </main>
  );
}

export default App;
