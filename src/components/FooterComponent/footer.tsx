import { useThemeContext } from '../../context/themeContext'
import SectionShape from '../SectionFigures/sectionFigures'
import './footer.css'

function Footer() {
    const mode = useThemeContext()

    return (
        <>
            <SectionShape svg1={{bg:mode.theme==="light" ? "var(--section-bg-light-color-2)" : "var(--section-bg-dark-color-2)", blur:true}} svg2={{bg:"black", blur:false}} />
            
            <footer className="section footer">
                <div className="call-action">
                    <h3 className="ca-title">Hagamos realidad tu <span>idea</span></h3>
                    <button className="btn btn1">Contactame</button>
                </div>

                <div className="social-links">
                    <ul>
                        <li><a href="tel:+563011399706"><i className="bx bx-phone"></i> +57 3011399706</a></li>
                        <li><a href="mailto:Sergiogutierrezp122@gmail.com"><i className="bx bx-envelope"></i> Sergiogutierrezp122@gmail.com</a></li>
                        <li><a href="https://github.com/SagutierrezWD"><i className='bx bxl-github'></i> Sagutierrez (GH)</a></li>
                        <li><a href="https://www.linkedin.com/in/sagutierrezwd/"><i className='bx bxl-linkedin-square'></i> Sagutierrez (LI)</a></li>
                    </ul>
                </div>

                <div className="info">
                    <span className='rights'>@Sagutierrez - Todos los derechos reservados - 2026</span>

                    <span className='time'>10:53:06 AM</span>

                    <button className="btn btn1"><i className='bx bxs-arrow-from-bottom'></i></button>
                </div>
            </footer>
        </>
    )
}

export default Footer