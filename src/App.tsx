import './App.css'
import AboutMe from './components/AboutMe/aboutMe'
import Hero from './components/Hero/hero'
import Navbar from './components/Navbar/navbar'
import Footer from './components/FooterComponent/footer'
import AltBackground from './components/AllternateBackground/alternateBackground'
import Projects from './components/Projects/projects'
import { useThemeContext } from './context/themeContext'

const menuItem = [
  {icon:"bx bx-home", text:"Inicio"},
  {icon:"bx bxs-user-detail", text:"Sobre mi"},
  {icon:"bx bx-book-content", text:"Proyectos"},
  {icon:"bx bx-briefcase", text:"Habilidades"},
  {icon:"bx bx-envelope", text:"Contactame"}
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
          <Projects />
        </main>
        <Footer />
    </>
  )
}

export default App
