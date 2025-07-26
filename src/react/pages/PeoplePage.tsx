import {motion} from 'framer-motion';

import { Search } from "@/components";
import { Button } from "@/components/ui/button";
import PersonCard from '@/components/PersonCard/PersonCard';

export default function PeoplePage() {
    return (
        <div className="flex gap-3 flex-col w-full h-full py-3">
            <motion.div className="flex gap-3 justify-between items-center px-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex flex-col">
                    <h1 className="text-2xl text-black font-bold">Pessoas</h1>
                    <p className="text-xs text-neutral-400">Há no total 387 pessoas registradas.</p>
                </div>

                <div className="flex gap-5 items-center">
                    <Search />
                    <Button variant={"outline"}>Filtrar</Button>
                    <Button >Adicionar Pessoa</Button>
                </div>
            </motion.div>

            <motion.div className="flex flex-col flex-grow px-3 overflow-y-auto scrollbar-base" 
                style={{height: "calc(100vh - 200px)"}}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
            >
                <div className="grid gap-3 grid-cols-3">
                    {Array.from({length: 60}).map(() => ({id: 353, name: "Manuel Isaac", age: 15, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()}) as Person)
                    .slice(0, 12).map((person, index) => (
                        <PersonCard key={index} person={person} onEdit={() => console.log("object")} handleDelete={() => console.log("object")} />
                    ))}
                </div>
                {/* {queryPagination.data?.data.content.length === 0 && (
                    <Stack justify="center" align="center" className="flex-grow">
                        <img src={emptyBox} width={100} height={100} />
                        <p className="text-center text-sm font-normal text-zinc-400">Nenhuma pessoa encontrada.</p>
                    </Stack>
                )} */}
            </motion.div>
            {/* <Pagination currentPage={page + 1} totalPages={queryPagination.data?.data.totalPages} onPageChange={changePage}/> */}
        </div>
    )
}
