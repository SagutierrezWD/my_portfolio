import type { MenuItemProps } from '../../types'
import './navbar.css'
import { useMenuStatusContext } from '../../context/menuContext.tsx'
import { useThemeContext } from '../../context/themeContext.tsx'

const Navbar: React.FC<MenuItemProps> = ({items}: MenuItemProps) => {

    const menu = useMenuStatusContext()
    const mode = useThemeContext()

    return (
        <aside className="sidebar">
            <span className="toggle" onClick={() => menu.toggleMenu()}>
                <i className='bx bx-menu'></i>
                <span className='menu-info'>{menu.open === true ? "Cerrar" : "Abrir"}</span>
                {/* Tambien se podria cambiar solo el texto */}
            </span>

            <ul className={menu.open === true ? "menu" : "menu hidden-menu"} id='menu'>
            {
                items.map(({icon, text}, i) => {
                    return <>
                    
                    <li className="menu-item" key={i}><a href="" className="link5"  key={i}><i className={icon}  key={i}></i><span className='menu-info' key={i}>{text}</span></a></li>
                    
                    </>
                })
            }
            </ul>

            <span className={menu.open === true ? "toggle" : "toggle hidden-menu"} onClick={() => mode.toggleTheme()}>
                <i className='bx bx-moon'></i>
                {/* <i className='bx bx-sun'></i> */}

                <span className='menu-info'>Modo Oscuro</span>
                {/* <span className='menu-info'>Modo Claro</span> */}
            </span>
        </aside>
    )
}

export default Navbar