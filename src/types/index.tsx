interface SectionProps {
    svg1: {bg:string, blur:boolean},
    svg2: {bg:string, blur:boolean}
}



interface AltBackgroundProps {
    hide: boolean;
}



interface MenuItemProps {
    items: ItemProps[]
}



interface ItemProps {
    icon: string;
    text: string;
    to: string;
}


type ProjectsListed = "p1" | "p2" | "p3";

export type { SectionProps, AltBackgroundProps, MenuItemProps, ProjectsListed }