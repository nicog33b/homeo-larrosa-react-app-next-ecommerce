import React, { useState } from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/solid';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative  h-full w-11/12 inline-block text-center z-10">
      <button
        onClick={toggleDropdown}
        className="bg-amber-50 text-center text-emerald-900 py-2 px-4 rounded focus:outline-none h-full w-full flex items-center justify-between border"
      >
        Categorías <ArrowDownIcon className="h-4 w-4" />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 text-center border bg-amber-50 border-gray-300 shadow-lg w-full"
          style={{ minWidth: 'max-content' }}
        >
          <a href="#" className="block py-2 px-4 text-black hover:bg-amber-100">
            Categoría 1
          </a>
          <a href="#" className="block py-2 px-4 text-black hover:bg-amber-100">
            Categoría 2
          </a>
          <a href="#" className="block py-2 px-4 text-black hover:bg-amber-100">
            Categoría 3
          </a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

