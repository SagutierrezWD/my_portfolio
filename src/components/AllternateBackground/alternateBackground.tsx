import type { AltBackgroundProps } from "../../types"


const AltBackground: React.FC<AltBackgroundProps> = ({hide}) => {
    return ([
        <>
            <div className="background"></div>
            <div className={hide == true ? "alt-background hide-back" : "alt-background"}></div>
        </>
    ])
}

export default AltBackground