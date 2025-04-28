import { ReactNode } from "react"

interface Props {
    children: ReactNode;
}
export default function GeneralTemplate({children}: Props){


    return(
        <div className="grid w-full grid-cols-12 gap-4 mb-10">
            {children}
        </div>
    )
}