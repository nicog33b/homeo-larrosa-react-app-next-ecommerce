import React from 'react';
import ProductCard from './productCard';

const ProductGrid = () => {
  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        {/* Categorías a la izquierda */}
        <div className="mb-4">
          <h2 className=" text-3xl font-semibold text-center mb-3">Categorías<hr/></h2>
          <ul>
            {/* Aquí puedes mapear las categorías si las tienes */}
            <li className="mb-2 text-center">
              <a href="#" className="hover:text-emerald-500">
              Homeopatia
              </a>
            </li>
            <li className="mb-2 text-center">
              <a href="#" className="hover:text-blue-500">
              Suplementos
              </a>
            </li>
            <li className="mb-2 text-center">
              <a href="#" className="hover:text-blue-500">
              Veterinaria
              </a>
            </li>
            <li className="mb-2 text-center">
              <a href="#" className="hover:text-blue-500">
              Aromaterapia 
              </a>
            </li>
            <li className="mb-2 text-center">
              <a href="#" className="hover:text-blue-500">
              Hierbas
              </a>
            </li>
            <li className="mb-2 text-center">
              <a href="#" className="hover:text-blue-500">
              Tés
              </a>
            </li>
            <li className="mb-2 text-center">
              <a href="#" className="hover:text-blue-500">
              Cosmética
              </a>
            </li>


            {/* ... */}
          </ul>
        </div>
      </div>
      <div className="w-3/4 p-4">
        {/* Cuadrícula de productos a la derecha */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>



        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
