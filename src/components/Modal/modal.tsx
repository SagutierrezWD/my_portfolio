import "./modal.css"
import { useModalContext } from '../../context/modalContext'
import type { ProjectsListed } from '../../types'
import p1 from "../../assets/p1.jpg"
import p2 from "../../assets/p2.jpg"
import p3 from "../../assets/p3.jpg"
import { useEffect } from "react"

const Modal = () => {

    const modal = useModalContext()

    let open = modal.isOpen

    const toggle = (e:React.MouseEvent<HTMLDivElement, MouseEvent>, id:ProjectsListed) => {
        e.stopPropagation()
        modal.toggleModal(id)
    }

    useEffect(() => {
        open = modal.isOpen
        document.body.style.overflow = open===true ? "hidden" : "unset"
    }, [modal.isOpen])

    return (
        <>
            <div className="modal" style={{display:open === true ? "flex" : "none"}} onClick={(e) => toggle(e, "p1")}>
                <div className="modal-card">
                    {
                    modal.selectedProject === "p1" && <><
                        img src={p1} alt="imagen del proyecto" className="modal-image"/>
                        <div className='modal-btn-zone'>
                        <a href="https://github.com/SagutierrezWD/dictionary" target="_blank" role="button" className="btn btn1 modal-links">
                            <i className='bx bxl-github'></i>
                            <span>Codigo</span>
                        </a>

                        <a href="https://dictionary-gamma-six.vercel.app" target="_blank" role="button" className="btn btn1 modal-links">
                            <i className='bx bx-link-external'></i>
                            <span>Sitio web</span>
                        </a>
                        </div>
                    </>
                    }
                    {
                    modal.selectedProject === "p2" && <>
                    <img src={p2} alt="imagen del proyecto" className="modal-image"/>
                    <div className='modal-btn-zone'>
                        <a href="https://github.com/SagutierrezWD/aluraflix" target="_blank" role="button" className="btn btn1 modal-links">
                            <i className='bx bxl-github'></i>
                            <span>Codigo</span>
                        </a>

                        <a href="https://aluraflix-tan.vercel.app" target="_blank" role="button" className="btn btn1 modal-links">
                            <i className='bx bx-link-external'></i>
                            <span>Sitio web</span>
                        </a>
                        </div>
                    </>
                    }
                    {
                    modal.selectedProject === "p3" && <>
                    <img src={p3} alt="imagen del proyecto" className="modal-image"/>
                    <div className='modal-btn-zone'>
                        <a href="https://github.com/SagutierrezWD/alurageek_ecommerce" target="_blank" role="button" className="btn btn1 modal-links">
                            <i className='bx bxl-github'></i>
                            <span>Codigo</span>
                        </a>

                        <a href="https://sagutierrezwd.github.io/alurageek_ecommerce/" target="_blank" role="button" className="btn btn1 modal-links">
                            <i className='bx bx-link-external'></i>
                            <span>Sitio web</span>
                        </a>
                        </div>
                    </>
                    }
                </div>
            </div>
        </>
    )
}

export default Modal