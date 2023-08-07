import { IconType } from "react-icons"

export interface RouteItem {
    label?: string
    href: string
    icon: IconType
    onClick?: () => void
    active?: boolean
}