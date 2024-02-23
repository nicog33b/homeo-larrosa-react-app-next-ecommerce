import React, { useState } from 'react';
import './globals.css'

function InsertProduct() {
  const [product, setProduct] = useState({
    id: '',
    nombre: '',
    precio: '',
    marca: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del producto a tu servidor o realizar la acción que desees.
    console.log('Datos del producto:', product);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Formulario de Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">ID del Producto:</label>
          <input
            type="text"
            name="id"
            value={product.id}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Nombre del Producto:</label>
          <input
            type="text"
            name="nombre"
            value={product.nombre}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Precio del Producto:</label>
          <input
            type="number"
            name="precio"
            value={product.precio}
            onChange={handleChange}
            step="0.01"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Marca del Producto:</label>
          <input
            type="text"
            name="marca"
            value={product.marca}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className='justify-center align-middle'>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg text-center"
        >
            Agregar producto nuevo
        </button>
        </div>
      </form>
    </div>
  );
}

export default InsertProduct;
