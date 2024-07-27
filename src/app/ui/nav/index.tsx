"use client"

import { usePathname } from "next/navigation"
import NavLink from "./link/link"
import styles from "./nav.module.css"

export default function Navigation() {
    const pathname = usePathname()
    
    return (
        <div className={ styles.navigation_container }>
            <div className={ styles.header }>
                {/* <div className={ styles.profile_picture_box }/> */}
                <span className={ styles.header_text }>{ pathname }</span>
            </div>
            <div className={ styles.links_container }>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/foods">Foods</NavLink>
                <NavLink href="/settings">Settings</NavLink>
            </div>
        </div>
    )
}