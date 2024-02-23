import React from "react";
import './globals.css'
import Navbar from '../components/UI/navbar'
import Footer from '../components/UI/footer'
import ProductRow from "@/components/productRow";

export default function UserCart() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center bg-green-100 min-h-screen">
        <div className="bg-white w-full md:w-3/4 lg:w-2/3 xl:w-1/2 px-4 md:px-8 py-8 shadow-lg rounded-lg border-2">
          <h1 className="bg-amber-100 text-2xl font-semibold mb-4 text-center border rounded  " >Estas a un paso de obtener tus productos</h1>
          <div className="table-container overflow-y-auto max-h-96">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 rounded text-emerald-600">
                  <th className="py-2 px-4 text-center">Ilustracion</th>
                  <th className="py-2 px-4 text-center">Nombre</th>
                  <th className="py-2 px-4 text-center">Precio</th>
                  <th className="py-2 px-4 text-center">Cantidad</th>
                </tr>
              </thead>
              <tbody>
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                {/* Puedes agregar más filas de productos aquí */}
              </tbody>
            </table>
          </div>
          <div className="mt-6 p-4 border-t">
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>$430</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>IVA (18%):</span>
              <span>$70</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Envío:</span>
              <span className=" opacity-80">No disponible actualmente.</span>
            </div>

         
            <div className="flex justify-between mb-2">
              <span>Total:</span>
              <span>$500</span>
            </div>

            <div className="flex items-center justify-between mt-4 mb-4">
              <input
                type="text"
                placeholder="Código de cupón"
                className="p-2 border rounded w-1/2"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Aplicar Cupón
              </button>
            </div>
          
          <button className="bg-green-600 w-full   h-12  rounded border  hover:bg-green-200 ">Comprar</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
