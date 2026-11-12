import { useThemeContext } from '../../context/themeContext'
import SectionShape from '../SectionFigures/sectionFigures'
import './skills.css'

const Skills = () => {

    const mode = useThemeContext()

    return (
        <>
            <SectionShape svg1={{bg:mode.theme==="light" ? "var(--section-bg-light-color-1)" : "var(--section-bg-dark-color-1)", blur:false}} svg2={{bg:mode.theme==="light" ? "var(--section-bg-light-color-2)" : "var(--section-bg-dark-color-2)", blur:false}} />
            <section id="skills" className="section skills">
                <div className='skills-copy reveal2'>
                    <div className="skills-card-bottom">
                        <div className="skill-shape" />
                        <h3 className='text'>Habilidades</h3>
                    </div>

                    <div className="skills-card">
                        <div className="soft text">
                                {/* <h3>Habilidades</h3> */}
                                <span>Durante mi carrera como desarrollador, he podido trabajar y aplicar tanto metodologias como tecnologias. Algunas de esas son las siguientes:</span>
                                {/* parrafo mas corto en span? */}
                                <ul>
                                    <li>Html, Css y Javascript</li>
                                    <li>Typescript</li>
                                    <li>Angular y React</li>
                                    <li>PHP y SQL</li>
                                    <li>Redux y GIT</li>
                                    <li>Metodologias agiles (SCRUM, AGILE)</li>
                                </ul>
                        </div>

                        {/* <div className="line" /> */}

                        <div className="tech-icons">
                            {/* <h3>Habilidades tecnicas</h3>
                            <span>Algunas son:</span> */}
                            {/* <ul>
                                <li>tml, Css y Javascript</li>
                                <li>Typescript</li>
                                <li>Angular y React</li>
                                <li>PHP y SQL</li>
                                <li>Redux y GIT</li>
                            </ul> */}
                        </div>
                    </div>
                </div>
                {/* Zona pequeña para habilidades blandas que ocupe todo el ancho? */}
            </section>
        </>
    )
}

export default Skills