import { ReactNode, Dispatch, SetStateAction } from "react"

import styles from "./modal.module.css"

export type ModalProperties = {
    children: ReactNode
    isOpen?: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function Modal(properties: ModalProperties) {
    if (!properties.isOpen) {
        return
    }

    return (
        <div 
            className={ styles.modal_container }
            // onClick={() => properties.setOpen(!properties.isOpen)}
        >
            <div className={ styles.modal_content}>{ properties.children }</div>
        </div>
    )
}