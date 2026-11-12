import './App.css'
import AboutMe from './components/AboutMe/aboutMe'
import Hero from './components/Hero/hero'
import Navbar from './components/Navbar/navbar'
import Footer from './components/FooterComponent/footer'
import AltBackground from './components/AllternateBackground/alternateBackground'
import Projects from './components/Projects/projects'
import { useThemeContext } from './context/themeContext'
import Skills from './components/Skills/skills'
import ContactMe from './components/ContactMe/contactMe'

const menuItem = [
  {icon:"bx bx-home", text:"Inicio", to:"home"},
  {icon:"bx bxs-user-detail", text:"Sobre mi", to:"aboutme"},
  {icon:"bx bx-briefcase", text:"Habilidades", to:"skills"},
  {icon:"bx bx-book-content", text:"Proyectos", to:"projects"},
  {icon:"bx bx-envelope", text:"Contactame", to:"contactme"}
]

function App() {

  const mode = useThemeContext()
  
  const status = mode.theme === "light" ? true : false

  return (
    <>
        <AltBackground hide={status} />
        <Navbar items={menuItem}/>
        <main>
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <ContactMe />
        </main>
        <Footer />
    </>
  )
}

export default App
