import dayjs from "dayjs";

// import { FiEdit } from "react-icons/fi";
import { SiSteelseries } from "react-icons/si";
import { PiMaskHappyLight } from "react-icons/pi";
import { TfiVideoClapper } from "react-icons/tfi";
import { BiCategoryAlt, BiTask } from "react-icons/bi";
import { MdMoreVert, MdOutlineShare } from "react-icons/md";
import { LiaBirthdayCakeSolid, LiaNimblr } from "react-icons/lia";
import { LuCalendarCheck2, LuCalendarSync, LuCheck, LuPhone } from "react-icons/lu";

import { cn, formatTimeAgo } from "@/lib/utils";
import IconButton from "../IconButton/IconButton";
import type PersonCardProps from "./PersonCardProps";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function PersonCard({person}:PersonCardProps) {

    return (
        <div className='flex gap-3 flex-col items-stretch p-3 border flex-shrink-0 border-main bg-white rounded-lg'>
            <div className="flex gap-4 flex-wrap">
                <div className="flex gap-1.5 justify-center items-center h-6 text-sm rounded-xl px-2 text-pink-700 bg-pink-400/10">
                    <LiaNimblr className="text-lg -mt-1"/>
                    <span>Animes</span>
                    <LuCheck className="text-sm"/>
                </div>
                <div className="flex gap-1.5 justify-center items-center h-6 text-sm rounded-xl px-2 text-indigo-700 bg-indigo-400/10">
                    <TfiVideoClapper className="text-sm"/>
                    <span>Filmes</span>
                    <LuCheck className="text-sm"/>
                </div>
                <div className="flex gap-1.5 justify-center items-center h-6 text-sm rounded-xl px-2 text-sky-700 bg-sky-400/10">
                    <SiSteelseries className="text-sm"/>
                    <span>Séries</span>
                    <LuCheck className="text-sm"/>
                </div>
                <div className="flex gap-1.5 justify-center items-center h-6 text-sm rounded-xl px-2 text-amber-700 bg-amber-400/10">
                    <PiMaskHappyLight className="text-base -mt-0.5"/>
                    <span>Doramas</span>
                    <LuCheck className="text-sm"/>
                </div>
            </div>

            <div className="w-full flex flex-col">
                <div className="w-full flex gap-2 justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <h2 className='text-sm text-neutral-700 font-bold truncate' data-tooltip-id={`person-name-${person.id}`} data-tooltip-content={person.name}>{person.name}</h2>
                        <LuCheck className="text-lg text-teal-400"/>
                        <span className="text-xs text-teal-400 font-normal">Selecionado</span>
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <IconButton component={"div"} className="text-neutral-400 text-base w-6 h-6">
                                <MdMoreVert />
                            </IconButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent data-align="">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="text-xs text-sky-500 font-normal p-1.5 bg-sky-400/5 rounded-sm">Há no total de 876 médias enviadas desde 2025 até o momento.</div>
            </div>

            <div className="flex gap-3 items-center">
                <Tooltip>
                    <TooltipTrigger>
                        <div className="flex gap-2 items-center border border-zinc-100 h-6 px-1 rounded-3xl">
                            <LiaBirthdayCakeSolid className="text-base text-zinc-500" />
                            <span className="text-xs font-normal text-neutral-500">21</span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>Idade</TooltipContent>
                </Tooltip>
                
                <Tooltip>
                    <TooltipTrigger>
                        <div className="flex gap-2 items-center border border-zinc-100 h-6 px-1 rounded-3xl">
                            <LuCalendarCheck2 className="text-sm text-zinc-500" />
                            <span className="text-xs font-normal text-neutral-500">{formatTimeAgo(dayjs().subtract(26, "year").toDate())}</span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>Data de registro</TooltipContent>
                </Tooltip>
                
                <Tooltip>
                    <TooltipTrigger>
                        <div className="flex gap-2 items-center border border-zinc-100 h-6 px-1 rounded-3xl">
                            <LuCalendarSync className="text-sm text-zinc-500" />
                            <span className="text-xs font-normal text-neutral-500">{formatTimeAgo(dayjs().subtract(26, "year").toDate())}</span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>Última atualização</TooltipContent>
                </Tooltip>
                
                <Tooltip>
                    <TooltipTrigger>
                        <div className="flex gap-2 items-center border border-zinc-100 h-6 px-1 rounded-3xl">
                            <LuPhone className="text-sm text-zinc-500" />
                            <span className="text-xs font-normal text-neutral-500">+244 912345678</span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>Contacto telefónico</TooltipContent>
                </Tooltip>
            </div>

            <div className="flex gap-3 justify-between items-center">
                <div className="grow h-1 rounded-3xl bg-neutral-200">
                    <div className={cn("w-1/3 h-full rounded-3xl", {
                        "bg-violet-500": false,
                        "bg-indigo-500": false,
                        "bg-sky-500": false,
                        "bg-teal-500": false,
                        "bg-amber-400": false,
                        "bg-pink-400": false,
                        "bg-red-500": false,
                        "bg-yellow-400": false,
                        "bg-green-500": false,
                        "bg-blue-500": false,
                        "bg-rose-500": false,
                        "bg-orange-500": true,
                    })}></div>
                </div>
                <span className="text-xs text-neutral-400 font-semibold">56%</span>
            </div>

            <div className="flex justify-between items-center gap-2">
                <div className="flex gap-2 items-center">
                    <Tooltip>
                        <TooltipTrigger>
                            <div className="flex gap-2 items-center border border-zinc-100 h-6 px-3 rounded-3xl">
                                <span className="text-xs font-bold text-neutral-500">2115</span>
                                <MdOutlineShare className="text-md text-zinc-500" />
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>Total de envios.</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger>
                            <div className="flex gap-2 items-center border border-zinc-100 h-6 px-3 rounded-3xl">
                                <BiTask className="text-md text-zinc-500" />
                                <span className="text-xs font-bold text-neutral-600">2</span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>Total de envios pendentes.</TooltipContent>
                    </Tooltip>
                </div>
                
                <div className="flex gap-2 items-center">
                    <Tooltip>
                        <TooltipTrigger>
                            <div className="flex gap-2 items-center border border-zinc-100 h-6 px-3 rounded-3xl">
                                <BiCategoryAlt className="text-md text-zinc-500" />
                                <span className="text-xs font-bold text-zinc-600">21</span>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>Gêneros favoritos.</TooltipContent>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}
