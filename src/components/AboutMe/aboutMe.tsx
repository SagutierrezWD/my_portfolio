import { useEffect } from 'react'
import { useThemeContext } from '../../context/themeContext.tsx'
import  SectionShape  from '../SectionFigures/sectionFigures.tsx'
import './aboutMe.css'
// import image from "../../assets/me.jpg"

const AboutMe = () => {
    const mode = useThemeContext()

    let themeColor = mode.theme
    
    useEffect(() => {
            themeColor = mode.theme
            if(themeColor==="light"){
                document.documentElement.style.setProperty("--pseudo-color", "radial-gradient(circle 24px at top left, transparent 98%, white)");   
            }else{
                document.documentElement.style.setProperty("--pseudo-color", "radial-gradient(circle 24px at top left, transparent 98%, #26355D)");
            }
    }, [mode.theme])

    return (
        <>
            <SectionShape svg1={{bg:"rgba(0, 0, 0, 0.0)", blur:false}} svg2={{bg:mode.theme==="light" ? "var(--section-bg-light-color-1)" : "var(--section-bg-dark-color-1)", blur:true}} />
            <section id="aboutme" className={mode.theme ==="light" ? 'section aboutMe' : 'section aboutMe alt-aboutMe'}>
                <div className="whole-invisible-section reveal">
                    <div style={{width:"100%"}}>
                        <div className="card-shape">
                            <div className="shaping">
                            <h3 className='shape-title' style={{backgroundColor:themeColor==="light" ? "white" : "#26355D", color:themeColor==="light" ? "var(--main-color-2)" : "#92EEFF"}}>Sobre mi</h3>
                            <div className="shape" style={{background:themeColor==="light" ? "linear-gradient(120deg, white, #d9f0ff)" : "linear-gradient(120deg, #26355D, #362F4F)"}}/></div>
                        </div>
                    </div>

                    <div className="container">
                        {/* <div className="title">
                            <h3>Sobre mi</h3>
                            </div> */}

                        {/* <img src={image} alt="Foto de perfíl" className='profile' /> */}

                        <div className="card" style={{background:themeColor==="light" ? "linear-gradient(120deg, white, #d9f0ff)" : "linear-gradient(120deg, #26355D, #362F4F)", color:themeColor==="light" ? "black" : "white"}}>
                            {/* <div className="aside">
                                <h3 className='card-title'>Sobre mi</h3>
                            </div> */}
                            <p className="text">
                                He adquirido experiencia desarrollando haciendo mis practicas profesionales, en las cuales desarrolle junto a un equipo una plataforma para mi instituto destinada a cientos de estudiantes, ademas de mis colaboraciones a los proyectos de otro desarrollador con experiencia en los que aprendí nuevas tecnologías. 
                            </p>
                            {/* <p className="text">
                                Actualmente estoy preparándome porque me encantaría tener la oportunidad de crecer como profesional trabajando junto a un equipo.
                            </p> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe
