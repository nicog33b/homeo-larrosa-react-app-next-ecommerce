import React, { useState } from "react";
import Image from "next/image";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/24/solid";

const ProductCard = () => {
    const [showButtons, setShowButtons] = useState(false);

    const handleMouseEnter = () => {
        setShowButtons(true);
    };

    const handleMouseLeave = () => {
        setShowButtons(false);
    };

    return (
        <div className="max-w-md mx-auto p-4 shadow-md relative">
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative rounded overflow-hidden"
            >
                <Image
                    src="https://prod-resize.tiendainglesa.com.uy/images/large/P418306-1.jpg?20180629123812,Aceite-de-Coco-Virgen-LA-ABUNDANCIA-600ml-en-Tienda-Inglesa"
                    alt="Producto Increíble"
                    layout="responsive"
                    width={400}
                    height={400}
                    objectFit="cover"
                />
                {showButtons && (
                    <div className="absolute top-4 right-4 flex flex-col space-y-2">
                        <button className="bg-emerald-500 hover:bg-green-600 text-white px-3 py-2 rounded-md">
                            <ShoppingCartIcon className="h-4 w-4" />
                        </button>
                        <button className="bg-yellow-600 hover:bg-amber-400 text-white px-3 py-2 rounded-md">
                            <HeartIcon className="h-4 w-4" />
                        </button>
                    </div>
                )}
            </div>
            <div className="text-center mt-4">
                <h2 className="text-2xl font-semibold mb-2">Producto Increíble</h2>
                <p className="text-gray-600 mb-4">$19.99</p>
                <div className="flex justify-center space-x-4">
                    {/* Resto del código de los botones y cantidad */}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
