import { useThemeContext } from '../../context/themeContext.tsx'
import  SectionShape  from '../SectionFigures/sectionFigures.tsx'
import './aboutMe.css'
// import image from "../../assets/me.jpg"

const AboutMe = () => {
    const mode = useThemeContext()

    return (
        <>
            <SectionShape svg1={{bg:"rgba(0, 0, 0, 0.0)", blur:false}} svg2={{bg:mode.theme==="light" ? "var(--section-bg-light-color-1)" : "var(--section-bg-dark-color-1)", blur:true}} />
            <section className={mode.theme ==="light" ? 'section aboutMe' : 'section aboutMe alt-aboutMe'}>
                <div className="whole-invisible-section">
                    <div style={{width:"100%"}}>
                        <div className="card-shape">
                            <div className="shaping">
                            <h3 className='shape-title'>Sobre mi</h3>
                            <div className="shape" /></div>
                        </div>
                    </div>

                    <div className="container">
                        {/* <div className="title">
                            <h3>Sobre mi</h3>
                            </div> */}

                        {/* <img src={image} alt="Foto de perfíl" className='profile' /> */}

                        <div className="card">
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