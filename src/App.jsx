import Navbar from "./layouts/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonials />
    </main>
    </>
  )
}

export default App;