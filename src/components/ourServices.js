import React from 'react';
import Image from 'next/image';

const ServicesSection = () => {
  return (
    <section className=" py-12">
      <div className="container mx-auto">
        <h2 className="border-4 border-white text-3xl font-serif text-center mb-8 text-emerald-900">CONOCE NUESTROS SERVICIOS<hr></hr></h2>
     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Servicio 1 */}
          <div className="bg-white p-6 rounded shadow relative overflow-hidden">
  <h3 className="text-xl font-semibold mb-2">Homeopatia</h3>
  <p className="text-gray-700">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
    ultrices dolor.
  </p>
  <Image
    src="/images/servicios/homeopatia.jpg" 
    alt="Homeopatia"
    width={200}
    height={250}
    className="mt-4 w-full transform hover:scale-110 transition-transform duration-300"
  />
</div>
          {/* Servicio 2 */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Flores de buch</h3>
            <p className="text-gray-700">
              Ut cursus purus ut sem finibus, nec gravida mauris facilisis.
            </p>
            <Image
    src="/images/servicios/flores de buch.jpg" 
    alt="Homeopatia"
    width={200}
    height={250}
    className="mt-4 w-full transform hover:scale-110 transition-transform duration-300"
  />
          </div>
          {/* Servicio 3 */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Flores de bush</h3>
            <p className="text-gray-700">
              Maecenas eget urna at leo finibus suscipit. Pellentesque habitant
              morbi tristique senectus.
            </p>
            <Image
    src="/images/servicios/flores de bush.jpg" 
    alt="Homeopatia"
    width={200}
    height={250}
    className="mt-4 w-full transform hover:scale-110 transition-transform duration-300"
  />
          </div>
           {/* Servicio 4*/}
           <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Suplementos</h3>
            <p className="text-gray-700">
              Maecenas eget urna at leo finibus suscipit. Pellentesque habitant
              morbi tristique senectus.
            </p>
            <Image
    src="/images/servicios/asd.jpg" 
    alt="Homeopatia"
    width={200}
    height={250}
    className="mt-4 w-full transform hover:scale-110 transition-transform duration-300"
  />
          </div>
           {/* Servicio 5 */}
           <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Harinas</h3>
            <p className="text-gray-700">
              Maecenas eget urna at leo finibus suscipit. Pellentesque habitant
              morbi tristique senectus.
            </p>
            <Image
   src="/images/servicios/harinas.jpg" 
    alt="Homeopatia"
    width={200}
    height={250}
    className="mt-4 w-full transform hover:scale-110 transition-transform duration-300"
  />
          </div>
           {/* Servicio 6 */}
           <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Aromaterapia</h3>
            <p className="text-gray-700">
              Maecenas eget urna at leo finibus suscipit. Pellentesque habitant
              morbi tristique senectus.
            </p>
            <Image
    src="/images/servicios/aromaterapia.jpg"  
    alt="Homeopatia"
    width={200}
    height={250}
    className="mt-4 w-full transform hover:scale-110 transition-transform duration-300"
  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
