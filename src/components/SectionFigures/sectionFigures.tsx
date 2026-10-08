import type { SectionProps } from '../../types'
import './sectionFigures.css'

const SectionShape: React.FC<SectionProps> = ({svg1, svg2}) => {
    
    return (
        <>
            {/* <div className="rect-container">
                <div className="triangle triangle-solid" style={{backgroundColor: svg1.bg, backdropFilter: svg1.blur == true ? "blur(8px)" : "none"}}></div>
                
    
                <div className="triangle triangle-blur-wrapper blur">
                    <div className="blur-content" style={{backgroundColor: svg2.bg, backdropFilter: svg2.blur == true ? "blur(8px)" : "none"}}></div>
                </div>
            </div> */}
            <div className={svg1.blur == true ? "place blur" : "place"} style={{backgroundColor: svg1.bg}} >
                <div className="place-shape" style={{backgroundColor: svg2.bg, backdropFilter: svg2.blur == true ? "blur(8px)" : "none"}}></div>
            </div>
        </>
    )
}

export default SectionShape