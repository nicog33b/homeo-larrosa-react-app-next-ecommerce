import React from "react";
import ProductCard from "./productCard";
import InfoCard from "./infoCard";
import { BeakerIcon } from "@heroicons/react/24/solid";


const MostPurchasedProducts = () => {
    return (
        <div className="max-w-full mx-auto p-4">
         
         
  
  <h1 class="text-3xl text-center text-emerald-900 font-serif mb-4 rounded ">
    <span>NUESTRA MARCA PERSONAL</span>
    <hr></hr>
  </h1>



 <hr></hr>


            <div className="flex flex-wrap ">;
       
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

                {/* Agrega más instancias de ProductCard según sea necesario */}
            </div>
        </div>
    );
};

export default MostPurchasedProducts;