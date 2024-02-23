import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const SearchForm = () => {
  return (
    <div className="flex items-center w-11/12">
      <div className="relative flex-grow">
        <input
          type="search"
          className="w-full border rounded-l px-3 py-2 focus:outline-none "
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <button
        className="bg-primary text-black px-3 py-3 rounded-r cursor-pointer border bg-amber-50"
        type="button"
      >
        <MagnifyingGlassIcon className="h-4 w-4 "/>
      </button>
    </div>
  );
};

export default SearchForm;
