import React from 'react'
import Image from 'next/image';

function AboutCard({ imageDirection, imageSrc, cardDescription }) {
  // Determina la clase de alineación en función del parámetro 'imageDirection'
  const imageAlignment = imageDirection === 'right' ? 'order-last ml-auto' : 'order-first mr-4';

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-10/12 p-4 flex items-center bg-white rounded-lg shadow-lg hover:bg-amber-50">
          <Image
            className={imageAlignment}
            src={imageSrc}
            alt="Tu imagen"
            width={150}
            height={300}
          />
          <div>
            <h2></h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl  font-mono">
              {cardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutCard;
