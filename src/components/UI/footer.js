'use client';

import React from 'react';
import { Typography } from "@material-tailwind/react";




const Footer = () => {
    return (
       <>

 

    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal ml-6 mr-6">
        &copy; 2023 Homeopatia Larrosa
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 mr-6 ml-6">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Inicio
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Productos
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Servicios
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Somos
          </Typography>
        </li>
      </ul>
    </footer>

        
       </>
    );
};

export default Footer;
