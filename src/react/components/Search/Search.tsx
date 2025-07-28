"use client";

import { forwardRef } from 'react';
import { ClipLoader } from 'react-spinners';

import { LuSearch } from 'react-icons/lu';

import { Button } from '../ui/button';
import type SearchProps from './SearchProps';

const Search = forwardRef<HTMLInputElement, SearchProps>(({loading, wapperProps, className, onSubmit, ...rest}, ref) => {
    return (
        <form className="flex gap-2 justify-between items-center w-screen max-w-sm bg-black/5 rounded-3xl pl-3 h-8 outline-2 outline-app-primary/5 has-[input:focus]:outline-app-primary/25 py-1.5 ">
            <input ref={ref} {...rest} name="search" placeholder="Pesquisar..." className="grow text-sm outline-none text-app-primary placeholder:text-neutral-400" />
            <Button className='flex justify-center items-center shrink-0 h-8 w-20 rounded-l-none rounded-r-3xl cursor-pointer bg-white'>
                {loading ? <ClipLoader size={14} color={'#6f6f71'}/> : <LuSearch className="text-app-primary text-lg" />} 
            </Button>
        </form>
    )
});

Search.displayName = "Search";

export default Search;