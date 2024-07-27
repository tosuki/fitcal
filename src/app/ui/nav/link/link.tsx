"use client"

import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"

import styles from "./link.module.css"
import { ReactNode } from "react"

export type NavLinkProperties = LinkProps & {
    children: ReactNode
}

export default function NavLink(properties: NavLinkProperties) {
    const pathname = usePathname()

    return (
        <Link className={
            pathname === properties.href ?
            styles.active_link :
            styles.inactive_link
        } {...properties}>{ properties.children }</Link>
    )
}