import Navbar from "./layouts/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";

const App = () => {
  return (
    <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
    </main>
    </>
  )
}

export default App;