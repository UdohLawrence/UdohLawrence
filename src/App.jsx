import Navbar from "./layouts/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import { Footer } from "./layouts/Footer";

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
      <Contact />
    </main>
    <Footer />
    </>
  )
}

export default App;