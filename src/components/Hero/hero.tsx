import './hero.css'
import image from "../../assets/me.jpg"
import { useThemeContext } from '../../context/themeContext.tsx'

const Hero = () => {
    const mode = useThemeContext()

    function navigateTo(id:string) {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }
    
    return (
        <>
            <section id="home" className="section hero">
                <div className="hero-head">
                    <div className="titles">
                        <h1 className="hero-title">Sergio Gutiérrez</h1>

                        <h2 className="hero-subtitle">Desarrollador Frontend</h2>
                    </div>

                    <div className="profile">
                    <img src={image} alt="Foto de perfíl" className='' />

                    </div>
                </div>

                {/* <p className="welcome">Bienvenido a mi portafolio, espero sea de tu agrado</p> */}

                <div className={mode.theme === "light" ? "dash" : "dash alt-dash"}>
                    <p className="legend">
                        Bienvenido a mi portafolio. 
                    </p>

                    <div className="btn-section">
                        <button onClick={() => navigateTo("projects")} className="btn btn1">
                            Proyectos
                        </button>

                        <button onClick={() => navigateTo("skills")} className="btn btn2">
                            Habilidades
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero