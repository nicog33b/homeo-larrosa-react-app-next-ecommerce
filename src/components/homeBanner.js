import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const bannerImages = [
  'imagen1.png', // Cambiado de 'imagen1.jpg'
  'imagen2.jpg',
  'imagen3.jpg',
  // ...agrega más nombres de imágenes aquí
];

const HomeBanner = () => {

  return (
<section className="bg-center bg-no-repeat bg-[url('https://static.vecteezy.com/system/resources/previews/002/885/318/non_2x/nature-green-tree-fresh-leaf-on-beautiful-blurred-soft-bokeh-sunlight-background-with-free-copy-space-spring-summer-or-environment-cover-page-template-web-banner-and-header-free-photo.jpg')] bg-gray-700 bg-blend-multiply">
    <div className="px-4 mx-auto  text-center py-24 lg:py-56 w-full">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">Homeopatía Naturista: Tu Camino hacia la Salud</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Homeopatía, cosmética natural, flores de buch, flores de bush, aromaterapia, fragancias, suplementos, harinas y más.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-900">
                 Productos
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                ¿Quién somos?
            </a>  
        </div>
    </div>
</section>

  );
};

export default HomeBanner;
