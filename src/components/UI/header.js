"use client";
import React from "react";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	HeartIcon,
	HomeIcon,
	MagnifyingGlassIcon,
    UserIcon
} from '@heroicons/react/24/solid';


export default function Header() {
    return (
        <nav className="w-full bg-amber-100 sticky top-0 z-50 flex flex-row items-center justify-between p-3">
            <div className="hidden flex-row items-center space-x-4 px-5 sm:flex">
                 < ChevronLeftIcon />
                < ChevronRightIcon />
            </div>
            <div className="flex flex-row items-center space-x-4 px-5 sm:hidden text-white">
                < HomeIcon />
                < HeartIcon />
                < MagnifyingGlassIcon />
            </div>
            <div className="flex flex-row items-center space-x-2 px-5 text-white">
                 {/*DropDown*/}
                <UserIcon/>
            </div>
        </nav>
    );
}
