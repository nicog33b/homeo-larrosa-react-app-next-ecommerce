import React from "react";
import Image from "next/image";

const ProductRow = ({ producto }) => {
  return (
    <tr className="text-center border-b">
      <td className="py-4">
        <div className="flex items-center justify-center border-l">
          <div className="">
            <Image
              className="object-contain rounded w-36 h-36 "
              src='https://prod-resize.tiendainglesa.com.uy/images/large/P418306-1.jpg?20180629123812,Aceite-de-Coco-Virgen-LA-ABUNDANCIA-600ml-en-Tienda-Inglesa'
              alt='asd'
              width={100} 
              height={100}
            />
          </div>
        </div>
      </td>
      <td className="py-2 border-l border-r">Aceite de coco</td>
      <td className="py-2 border-r">$500</td>
      <td className="py-2 border-r">3</td>
      {/* Puedes agregar más columnas según sea necesario */}
    </tr>
  );
};

export default ProductRow;
