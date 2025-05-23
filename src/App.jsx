import React from "react"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import Blogs from "./components/blog/Blog"
import { debounce } from "./components/utilities/debounce"
import { reveal } from "./components/utilities/reveal"
import DarkMode from "./components/utilities/darkmode"


const App = () => {
  const scrolling = window.addEventListener("scroll", reveal);
  debounce(scrolling, 100);

  return (
    <>
        <Header />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Blogs />
        <Footer />
        <DarkMode />
    </>
  )
}

export default App