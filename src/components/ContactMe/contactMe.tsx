import { useState } from "react"
import { useThemeContext } from "../../context/themeContext"
import SectionShape from "../SectionFigures/sectionFigures"
import "./contactMe.css"

const ContactMe = () => {

    const mode = useThemeContext()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const sendEmail = (e:React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert("Nombre: "+name+"Email: "+email)
    }

    return (
        <>
            <SectionShape svg1={{bg:mode.theme==="light" ? "var(--section-bg-light-color-1)" : "var(--section-bg-dark-color-1)", blur:false}} svg2={{bg:mode.theme==="light" ? "var(--section-bg-light-color-2)" : "var(--section-bg-dark-color-2)", blur:false}} />
            <section id="contactme" className="section contactMe" style={{backgroundColor:mode.theme==="light" ? "var(--section-bg-light-color-2)" : "var(--section-bg-dark-color-2)"}}>
                <div className="contactMe-copy reveal2">
                    <div className="cmCard text">
                        <form action="" className="formulary" onSubmit={(e) => sendEmail(e)}>
                            <label htmlFor="nombre">Nombre</label>
                            <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="nombre" id="nombre" placeholder="Mi nombre es..." maxLength={20} required/>

                            <label htmlFor="email">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" id="email" placeholder="Mi correo es..." maxLength={20} required/>

                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea onChange={(e) => setMessage(e.target.value)} value={message} name="mensaje" id="mensaje" placeholder="Sergio, te quiero comentar que..." maxLength={400} aria-controls="none" required></textarea>

                            <button className="btn btn1">Enviar</button>
                        </form>

                        <div className="desc">
                            <p>
                                {/* <div className="img"></div> */}
                                Transforma tu visión en una experiencia web interactiva y memorable. ¿Listo para llevar tu proyecto al siguiente nivel? Cuéntame tu idea y hagámosla realidad.
                            </p>
                        </div>
                    </div>
                    <div className="cmCard-bottom">
                        <h3 className="text">Contacta me</h3>
                        <div className="cmCard-shape"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactMe