import './nav.css'
import React, { useState } from 'react'

interface NavItem {
    label: string;
    href: string;
}

interface NavbarProps {
    logo: string;
    items: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({logo, items}) => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <nav style={{backgroundColor:"#333", color:"#fff", padding:"10px"}}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h2>{logo}</h2>

                    <ul style={{ display: isOpen ? "flex" : "none", listStyle: "none", padding: 0, gap:"10px" }}>
                        {items.map((item, index) => (
                            <li key={index} style={{ margin: "10px 0" }}>
                                <a href={item.href} style={{ color: "#fff", textDecoration: "none" }}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button onClick={() => setIsOpen(!isOpen)} style={{background:"none"}}>
                        {isOpen ? "Close" : "Open"}
                    </button>
                </div>
            </nav>
        </>
    )
}