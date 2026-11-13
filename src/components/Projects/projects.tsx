import "./projects.css"
import SectionShape from "../SectionFigures/sectionFigures"
import { useThemeContext } from "../../context/themeContext"
import p1 from "../../assets/p1.jpg"
import p2 from "../../assets/p2.jpg"
import p3 from "../../assets/p3.jpg"
import { useModalContext } from "../../context/modalContext"
import type { ProjectsListed } from "../../types"
import { useEffect } from "react"

const Icon = () => {
    return (<>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 9a3 3 0 1 0 0 6a3 3 0 1 0 0-6"></path>
            <path fill="currentColor" d="M12 19c7.63 0 9.93-6.62 9.95-6.68c.07-.21.07-.43 0-.63c-.02-.07-2.32-6.68-9.95-6.68s-9.93 6.61-9.95 6.67c-.07.21-.07.43 0 .63c.02.07 2.32 6.68 9.95 6.68Zm0-12c5.35 0 7.42 3.85 7.93 5c-.5 1.16-2.58 5-7.93 5s-7.42-3.84-7.93-5c.5-1.16 2.58-5 7.93-5"></path>
            </svg>
        </>)
}

const Projects = () => {
    const mode = useThemeContext()
    const modal = useModalContext()

    const toggle = (id:ProjectsListed) => {
        modal.toggleModal(id)
    }

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
            <SectionShape svg1={{bg:mode.theme==="light" ? "var(--section-bg-light-color-2)" : "var(--section-bg-dark-color-2)", blur:false}} svg2={{bg:mode.theme==="light" ? "var(--section-bg-light-color-1)" : "var(--section-bg-dark-color-1)", blur:false}} />
            <section id="projects" className="section projects" style={{backgroundColor:mode.theme==="light" ? "var(--section-bg-light-color-1)" : "var(--section-bg-dark-color-1)", backdropFilter:"none", color:"white"}}>
                <div className="projects-copy reveal3">
                    <div className="card-project text"  style={{background:themeColor==="light" ? "linear-gradient(120deg, white, #d9f0ff)" : "linear-gradient(120deg, #26355D, #362F4F)", color:themeColor==="light" ? "black" : "white"}}>
                        <div className="project">
                            <img className="p-img" src={p1} alt="Imagen del proyecto 1" />

                            <div className="p-desc">
                                <div className="h4">Dictionary app</div>
                                <p>Dictionary app es una plataforma donde puedes obtener informacion de palabras: desde su significado, sinonimos y antonimos hasta incluso como se pronuncia. Para su funcionamiento se consume una API gratuita.</p>
                            </div>

                            <div className="p-actions">
                                <a href="https://github.com/SagutierrezWD/dictionary" target="_blank" role="button" className="btn btn1 small-btn main-btn">
                                    <i className='bx bxl-github'></i>
                                </a>
                                        
                                <a href="https://dictionary-gamma-six.vercel.app" target="_blank" role="button" className="btn btn1 small-btn main-btn">
                                    <i className='bx bx-link-external'></i>
                                </a>

                                <button onClick={() => toggle("p1")} className="btn btn1 small-btn modal-btn">
                                    <Icon />
                                </button>

                                {/* <ul className="tech-list">
                                    <h4>Tecnologias usadas: </h4>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>React</li>
                                </ul> */}
                            </div>
                        </div>

                        <div className="project">
                            <img className="p-img" src={p2} alt="Imagen del proyecto 2" />

                            <div className="p-desc">
                                <div className="h4">Aluraflix</div>
                                <p>Aluraflix es otro de los retos propuestos en el programa ONE y consiste en una plataforma donde puedes ver y agregar videos de diferentes categorias.</p>
                            </div>

                            <div className="p-actions">
                                <a href="https://github.com/SagutierrezWD/alurageek_ecommerce" target="_blank" role="button" className="btn btn1 small-btn main-btn">
                                    <i className='bx bxl-github'></i>
                                </a>

                                <a href="https://sagutierrezwd.github.io/alurageek_ecommerce/" target="_blank" role="button" className="btn btn1 small-btn main-btn">
                                    <i className='bx bx-link-external'></i>
                                </a>
                                
                                <button  onClick={() => toggle("p2")} className="btn btn1 small-btn modal-btn">
                                    <Icon />
                                </button>
                            </div>
                        </div>

                        <div className="project">
                            <img className="p-img" src={p3} alt="Imagen del proyecto 3" />

                            <div className="p-desc">
                                <div className="h4">Alurageek Ecommerce</div>
                                <p>Alurageek es uno de los retos planteados en el programa ONE y consiste en una plataforma donde puedes comprar diferentes tipos de equipos como un usuario y tambien administrar los productos como un administrador.</p>
                            </div>

                            <div className="p-actions">
                                <a href="https://github.com/SagutierrezWD/aluraflix" target="_blank" role="button" className="btn btn1 small-btn main-btn">
                                    <i className='bx bxl-github'></i>
                                </a>
                                        
                                <a href="https://aluraflix-tan.vercel.app" target="_blank" role="button" className="btn btn1 small-btn main-btn">
                                    <i className='bx bx-link-external'></i>
                                </a>

                                <button onClick={() => toggle("p3")} className="btn btn1 small-btn modal-btn">
                                    <Icon />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="project-shape" style={{background:themeColor==="light" ? "linear-gradient(120deg, white, #d9f0ff)" : "linear-gradient(120deg, #26355D, #362F4F)"}}>
                        <div className="project-shaping"></div>
                        <h3 className="text"  style={{backgroundColor:themeColor==="light" ? "white" : "#26355D", color:themeColor==="light" ? "var(--main-color-2)" : "#92EEFF"}}>Proyectos</h3>
                    </div>
                </div>
            </section>
            {/* <SectionShape svg1={{bg:"rgba(0, 0, 0, 0.0)", blur:false}} svg2={{bg:"rgba(187, 222, 251, 0.8)", blur:true}} /> */}
        </>
    )
}

export default Projects