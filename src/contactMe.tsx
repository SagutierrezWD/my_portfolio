import './contactMe.css'

function ContactMe() {
    return (
        <>
            <div className="contact-card">
                <h1>Contact me</h1>
                <form action="">
                    <div className="form-group">
                        <input type="email" name="email" id="email" placeholder="Tu correo electrónico" required />
                    </div>
                    <div className="form-group">
                        <input type="text" name="message" id="message" placeholder="Escribe tu mensaje aquí..." required />
                    </div>
                    <button type="submit">Enviar mensaje</button>
                </form>
            </div>
        </>
    )
}

export default ContactMe