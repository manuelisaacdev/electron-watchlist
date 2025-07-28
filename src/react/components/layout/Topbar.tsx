import { useRef } from "react";

import { RiCommandFill } from "react-icons/ri";
import { IoChevronBackOutline } from "react-icons/io5";
import { LuBell, LuInfo, LuSearch } from "react-icons/lu";

import { useWatchRef } from "@/hooks";
import { IconButton } from "@/components";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function Topbar() {
    const watchRef = useWatchRef(useRef<HTMLDivElement | null>(null), "pt-PT", {dateStyle: 'full', timeStyle: 'medium'});
    
    return (
        <header className="flex gap-3 justify-between items-center w-full h-16 px-3 border-b border-zinc-100 bg-white">
            <div className="flex gap-5 items-center w-1/3 overflow-hidden">
                <IconButton className="hidden xl:flex">
                    <IoChevronBackOutline />
                </IconButton>
                <div className="flex flex-col">
                    <small className="text-xs text-neutral-400 font-normal">Seja bem-vindo,</small>
                    <h1 className="text-sm text-neutral-600 font-semibold">ManuelDesign</h1>
                </div>

                <div ref={watchRef} className="text-sm text-zinc-500 font-normal truncate hidden 2xl:block">{new Date().toLocaleString("pt-PT")}</div>
            </div>

            <div className="flex items-center w-1/3 shrink-0">
                <form className="flex gap-2 justify-between items-center w-full bg-black/5 rounded-3xl px-2 h-10 outline-2 outline-transparent has-[input:focus]:outline-app-primary/25 py-1.5 ">
                    <LuSearch className="text-app-primary/70 text-lg" />
                    <input type="text" name="search" placeholder="Pesquisar..." className="grow text-sm outline-none text-app-primary placeholder:text-neutral-400" />
                    <div className="flex gap-1 justify-center items-center h-6 px-1 shadow-sm rounded-md bg-zinc-50">
                        <RiCommandFill className="text-sm text-neutral-500"/>
                        <kbd className="text-sm text-neutral-500 font-bold">K</kbd>
                    </div>
                </form>
            </div>

            <div className="flex justify-end items-center gap-5 w-1/3 shrink-0 overflow-hidden">
                <p className="text-sm text-zinc-500 truncate">Nenhuma pessoa selecionada</p>
                <span className="inline-block self-stretch border-l border-zinc-200"/>
                <Tooltip>
                    <TooltipTrigger className="flex shrink-0 justify-center items-center text-lg w-8 h-8 rounded-full text-blue-400 cursor-pointer hover:bg-black/5">
                        <LuInfo/>
                    </TooltipTrigger>
                    <TooltipContent>Sobre</TooltipContent>
                </Tooltip>
                
                <Tooltip>
                    <TooltipTrigger className="flex shrink-0 justify-center items-center text-lg w-8 h-8 rounded-full text-app-primary-400 cursor-pointer hover:bg-black/5">
                        <LuBell/>
                    </TooltipTrigger>
                    <TooltipContent>Notificações</TooltipContent>
                </Tooltip>
            </div>
        </header>
    )
}
