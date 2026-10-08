import "./projects.css"
import SectionShape from "../SectionFigures/sectionFigures"
import { useThemeContext } from "../../context/themeContext"

const Projects = () => {
    const mode = useThemeContext()

    return (
        <>
            <SectionShape svg1={{bg:mode.theme==="light" ? "var(--section-bg-light-color-1)" : "var(--section-bg-dark-color-1)", blur:true}} svg2={{bg:mode.theme==="light" ? "var(--section-bg-light-color-2)" : "var(--section-bg-dark-color-2)", blur:true}} />
            <section className="section" style={{backgroundColor:mode.theme==="light" ? "var(--section-bg-light-color-2)" : "var(--section-bg-dark-color-2)", backdropFilter:"blur(8px)", color:"white"}}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iste, sit ullam reiciendis architecto dignissimos perferendis exercitationem eaque quasi voluptatibus? Ipsam quae beatae cupiditate? Quod veniam, in corrupti ullam incidunt molestiae modi culpa voluptates labore exercitationem vel cumque minus. Commodi eum incidunt ipsum fugit qui, et provident ab ratione aut.
                </p>
            </section>
            {/* <SectionShape svg1={{bg:"rgba(0, 0, 0, 0.0)", blur:false}} svg2={{bg:"rgba(187, 222, 251, 0.8)", blur:true}} /> */}
        </>
    )
}

export default Projects