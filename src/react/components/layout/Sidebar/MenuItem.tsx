import { NavLink } from "react-router";

import { cn } from "@/lib/utils";
import type MenuItemProps from "./MenuItemProps";

export default function MenuItem({title, icon:Icon, to="/"}:MenuItemProps) {
    return (
        <NavLink to={to} className={({isActive}) => cn("flex justify-center xl:justify-start items-center group w-10 xl:w-full h-10 gap-3 text-neutral-500 border border-neutral-100 px-0 xl:px-4 rounded-md cursor-pointer overflow-hidden hover:text-app-primary hover:bg-app-primary/5 relative before:absolute before:left-1.5 before:top-1/2 before:-translate-y-1/2 before:inline-block before:w-1 before:h-8/12 before:rounded-3xl before:bg-app-primary before:opacity-0 before:invisible xl:hover:before:opacity-100 xl:hover:before:visible transition-all duration-200 ease-linear", {
            "text-app-primary bg-app-primary/5 xl:before:opacity-100 xl:before:visible": isActive,
        })}>
            <Icon className="text-xl text-inherit shrink-0"/>
            <span className="text-sm truncate hidden xl:inline-block">{title}</span>
        </NavLink>
    )
}
