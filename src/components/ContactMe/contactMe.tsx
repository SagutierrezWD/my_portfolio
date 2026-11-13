import { useEffect, useState } from "react"
import { useThemeContext } from "../../context/themeContext"
import SectionShape from "../SectionFigures/sectionFigures"
import "./contactMe.css"

const ContactMe = () => {

    const mode = useThemeContext()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    // const sendEmail = (e:React.SubmitEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     alert("Nombre: "+name+"Email: "+email)
    // }

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
            <SectionShape svg1={{bg:mode.theme==="light" ? "var(--section-bg-light-color-1)" : "var(--section-bg-dark-color-1)", blur:false}} svg2={{bg:mode.theme==="light" ? "var(--section-bg-light-color-2)" : "var(--section-bg-dark-color-2)", blur:false}} />
            <section id="contactme" className="section contactMe" style={{backgroundColor:mode.theme==="light" ? "var(--section-bg-light-color-2)" : "var(--section-bg-dark-color-2)"}}>
                <div className="contactMe-copy reveal2">
                    <div className="cmCard text"   style={{background:themeColor==="light" ? "linear-gradient(120deg, white, #d9f0ff)" : "linear-gradient(120deg, #26355D, #362F4F)", color:themeColor==="light" ? "black" : "white"}}>
                        <form action="https://formsubmit.co/5b2850e523afdc533fe0aa4184a19fc4 " method="POST" className="formulary">
                            <div className="input-group">
                                <input type="hidden" name="_captcha" value="false"></input>

                                <div className="input-element">
                                    <label htmlFor="name">Nombre</label>
                                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" id="name" placeholder="Mi nombre es..." maxLength={30}  required/>
                                </div>

                                <div className="input-element">
                                    <label htmlFor="email">Email</label>
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" id="email" placeholder="Mi correo es..." maxLength={40} required/>
                                </div>
                            </div>

                            <label htmlFor="message">Mensaje</label>
                            <textarea onChange={(e) => setMessage(e.target.value)} value={message} name="message" id="message" placeholder="Sergio, te quiero comentar que..." maxLength={400} aria-controls="none" required></textarea>

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
                        <h3 className="text"   style={{backgroundColor:themeColor==="light" ? "white" : "#26355D", color:themeColor==="light" ? "var(--main-color-2)" : "#92EEFF"}}>Contacto</h3>
                        <div className="cmCard-shape"  style={{background:themeColor==="light" ? "linear-gradient(120deg, white, #d9f0ff)" : "linear-gradient(120deg, #26355D, #362F4F)"}}></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactMe