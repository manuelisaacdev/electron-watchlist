import { motion } from "framer-motion";
import stringToColor from "string-to-color";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { GoGraph } from "react-icons/go";
import { LiaNimblr } from "react-icons/lia";
import { BiCategoryAlt } from "react-icons/bi";
import { SiSteelseries } from "react-icons/si";
import { IoMdHeartEmpty } from "react-icons/io";
import { TfiVideoClapper } from "react-icons/tfi";
import { PiMaskHappyLight } from "react-icons/pi";
import { LuHouse, LuListMinus, LuPlus, LuUsersRound } from "react-icons/lu";
import { IoChevronForwardOutline, IoSettingsOutline } from "react-icons/io5";

import MenuItem from "./MenuItem";
import { IconButton } from "@/components";
import { avatar, checklist, favicon } from "@/assets";

export default function Sidebar() {
    return (
        <aside className="flex flex-col justify-between w-16 xl:w-xs h-full shrink-0 border-r border-zinc-100 bg-white transition-all duration-200 ease-in">
            <div className="flex gap-1 items-center flex-shrink-0 h-16 px-3">
                <img src={favicon} alt="Logo" width={40} height={40} className="shrink-0"/>
                <motion.div className="hidden xl:flex gap-1 items-center h-7 px-2 bg-app-primary rounded-md"
                    initial={{ opacity: 0, x: 40 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-xs text-white font-bold">Watch <span className="inline-block px-1 text-app-primary bg-white rounded-sm">List</span></h1>
                </motion.div>
            </div>

            <div className="flex flex-col items-center w-full grow gap-10 px-1 xl:px-3 overflow-y-auto scrollbar-base">
                <div className="flex flex-col w-full items-center xl:items-start gap-1">
                    <MenuItem title="Dashboard" icon={LuHouse} to="/" />
                    <MenuItem title="Pessoas" icon={LuUsersRound} to="people"/>
                    <MenuItem title="Animes" icon={LiaNimblr} to="animes"/>
                    <MenuItem title="Filmes" icon={TfiVideoClapper} to="movies"/>
                    <MenuItem title="Séries" icon={SiSteelseries} to="series"/>
                    <MenuItem title="Doramas" icon={PiMaskHappyLight} to="dramas"/>
                </div>

                <div className="flex flex-col w-full gap-2 items-center xl:items-start transition-all duration-500 ease-linear">
                    <h1 className="text-sm text-zinc-600 font-bold mb-1 hidden xl:block">Feedback</h1>
                    <MenuItem title="Gêneros" icon={BiCategoryAlt} to="genres"/>
                    <MenuItem title="Favoritos" icon={IoMdHeartEmpty} to="favorites"/>
                    <MenuItem title="Compartilhamentos" icon={LuListMinus} to="shares"/>
                </div>

                <div className="flex flex-col w-full gap-2 items-center xl:items-start transition-all duration-500 ease-linear">
                    <h1 className="text-sm text-zinc-600 font-bold mb-1 hidden xl:block">Suporte</h1>
                    <MenuItem title="Estatíticas" icon={GoGraph} to="statistic"/>
                    <MenuItem title="Configurações" icon={IoSettingsOutline} to="settings"/>
                </div>

                <div className="flex flex-col w-full gap-2">
                    <div className="flex justify-center xl:justify-between items-center transition-all duration-500 ease-linear">
                        <h1 className="text-sm text-zinc-600 font-bold mb-1 hidden xl:block">Meus Gêneros</h1>
                        <IconButton className="text-zinc-500">
                            <LuPlus />
                        </IconButton>
                    </div>
                    <div className="hidden xl:flex gap-3 flex-col">
                        {["Ação", "Aventura", "Comédia", "Drama", "Fantasia", "Romance"].map((genre) => (
                            <div key={genre} className="flex gap-3 items-center px-3">
                                <span className="inline-block w-2 h-2 rounded-full" style={{backgroundColor: stringToColor(genre)}}></span>
                                <p className="text-sm text-zinc-500 font-normal">{genre}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col items-center flex-shrink-0 px-3 pb-3">
                <motion.img className="hidden xl:block" src={checklist} width={126} height={120}
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.2 }}
                    initial={{ opacity: 0, y: -50 }} 
                />
                <div className="hidden xl:flex gap-2 justify-between items-center w-full p-3 border border-zinc-100 rounded-xl">
                    <Avatar>
                        <AvatarImage src={avatar} alt="User Avatar" />
                        <AvatarFallback>MI</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col grow">
                        <h1 className="text-sm text-zinc-800 font-semibold">Manuel Isaac</h1>
                        <p className="text-xs text-zinc-500 font-normal">manuelisaavialberto@mail.com</p>
                    </div>
                    <IconButton className="text-neutral-400">
                        <IoChevronForwardOutline />
                    </IconButton>
                </div>
                <div className="flex xl:hidden">
                    <Avatar>
                        <AvatarImage src={avatar} alt="User Avatar" />
                        <AvatarFallback>MI</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </aside>
    )
}
