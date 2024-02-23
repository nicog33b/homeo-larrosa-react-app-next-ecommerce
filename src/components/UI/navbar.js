'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import SearchForm from "./searchNav";
import OptionsModal from "../optionsModal";
import {
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <nav className="bg-amber-100 py-2 md:py-0 border-b-2 w-full">
      <div className="container mx-auto flex items-center justify-between ">
        {/* Logo a la izquierda */}
        <div className="mr-4 ml-6 cursor-pointer">
          <Link href="/">
            <Image src="/images/logoFinal.png" width={111} height={111} alt="logo" />
          </Link>
        </div>

        {/* Enlaces centrados */}
        <div className="hidden md:flex flex-grow justify-center space-x-12 h-full">
          <Link href="/" className="hover:text-white flex items-center h-full">
            <button className="flex items-center h-full text-lg mt-auto hover:bg-amber-200 font-serif text-emerald-600 p-2 md:p-6">
              Inicio
            </button>
          </Link>
          <Link href="/store" className="hover:text-blue-300 flex items-center h-full">
            <button className="flex items-center h-full text-lg mt-auto hover:bg-amber-200 font-serif text-emerald-600 p-2 md:p-6">
              Productos
            </button>
          </Link>
          <Link href="/nosotros" className="hover:text-blue-300 flex items-center h-full">
            <button className="flex items-center h-full text-lg mt-auto hover:bg-amber-200 font-serif text-emerald-600 p-2 md:p-6">
              Somos
            </button>
          </Link>
        </div>

        {/* Iconos en el lado derecho */}
        <OptionsModal isOpen={modalIsOpen} onClose={closeModal} />
        <div className="flex items-center space-x-3 ml-6">
          {/* Icon User */}
          <UserIcon className="h-6 w-6" onClick={openModal} />

          {/* Icono de carrito con círculo */}
          <div className="relative">
            <ShoppingCartIcon className="h-6 w-6" />
            <div className="absolute top-0 right-0 -mt-2  bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs">
              5 {/* Reemplaza con el número de elementos en el carrito */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
