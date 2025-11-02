import Header from "@/layout/Header"
import Footer from "@/layout/Footer"
import About from "@/sections/About"
import Experience from "@/sections/Experience"
import Projects from "@/sections/Projects"
import Skills from "@/sections/Skills"
import Blogs from "@/sections/Blog"
import { debounce } from "@/utilities/debounce"
import { reveal } from "@/utilities/reveal"
import DarkMode from "@/theme/darkmode"
import ParticlesBackground from "@/theme/particles"

const App = () => {
  const scrolling = window.addEventListener("scroll", reveal);
  debounce(scrolling, 100);

  return (
    <>
      <ParticlesBackground/>
      <Header/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Blogs/>
      <Footer/>
      <DarkMode/>
    </>
  );
}

export default App