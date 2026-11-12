import "./projects.css"
import SectionShape from "../SectionFigures/sectionFigures"
import { useThemeContext } from "../../context/themeContext"
import p1 from "../../assets/p1.jpg"
import p2 from "../../assets/p2.jpg"
import p3 from "../../assets/p3.jpg"

const Projects = () => {
    const mode = useThemeContext()

    return (
        <>
            <SectionShape svg1={{bg:mode.theme==="light" ? "var(--section-bg-light-color-2)" : "var(--section-bg-dark-color-2)", blur:false}} svg2={{bg:mode.theme==="light" ? "var(--section-bg-light-color-1)" : "var(--section-bg-dark-color-1)", blur:false}} />
            <section id="projects" className="section projects" style={{backgroundColor:mode.theme==="light" ? "var(--section-bg-light-color-1)" : "var(--section-bg-dark-color-1)", backdropFilter:"none", color:"white"}}>
                <div className="projects-copy reveal3">
                    <div className="card-project text">
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

                                <a href="" target="_blank" role="button" className="btn btn1 small-btn modal-btn">
                                    <i className='bx bx-link-external'></i>
                                </a>

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
                                <div className="h4">Alurageek Ecommerce</div>
                                <p>Alurageek es uno de los retos planteados en el programa ONE y consiste en una plataforma donde puedes comprar diferentes tipos de equipos como un usuario y tambien administrar los productos como un administrador.</p>
                            </div>

                            <div className="p-actions">
                                <a href="https://github.com/SagutierrezWD/alurageek_ecommerce" target="_blank" role="button" className="btn btn1 small-btn main-btn">
                                    <i className='bx bxl-github'></i>
                                </a>

                                <a href="https://sagutierrezwd.github.io/alurageek_ecommerce/" target="_blank" role="button" className="btn btn1 small-btn main-btn">
                                    <i className='bx bx-link-external'></i>
                                </a>
                                
                                <a href="" target="_blank" role="button" className="btn btn1 small-btn modal-btn">
                                    <i className='bx bx-link-external'></i>
                                </a>
                            </div>
                        </div>

                        <div className="project">
                            <img className="p-img" src={p3} alt="Imagen del proyecto 3" />

                            <div className="p-desc">
                                <div className="h4">Aluraflix</div>
                                <p>Aluraflix es otro de los retos propuestos en el programa ONE y consiste en una plataforma donde puedes ver y agregar videos de diferentes categorias.</p>
                            </div>

                            <div className="p-actions">
                                <a href="https://github.com/SagutierrezWD/aluraflix" target="_blank" role="button" className="btn btn1 small-btn main-btn">
                                    <i className='bx bxl-github'></i>
                                </a>
                                        
                                <a href="https://aluraflix-tan.vercel.app" target="_blank" role="button" className="btn btn1 small-btn main-btn">
                                    <i className='bx bx-link-external'></i>
                                </a>

                                <a href="" target="_blank" role="button" className="btn btn1 small-btn modal-btn">
                                    <i className='bx bx-link-external'></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project-shape">
                        <div className="project-shaping"></div>
                        <h3 className="text">Proyectos</h3>
                    </div>
                </div>
            </section>
            {/* <SectionShape svg1={{bg:"rgba(0, 0, 0, 0.0)", blur:false}} svg2={{bg:"rgba(187, 222, 251, 0.8)", blur:true}} /> */}
        </>
    )
}

export default Projects