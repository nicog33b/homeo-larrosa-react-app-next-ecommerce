import React from "react";
import './globals.css'
import Navbar from "@/components/UI/navbar";
import AboutCard from "@/components/somosCard";

export default function Somos() {
  const aboutCardData = [
    {
      imageDirection: 'left',
      imageSrc: '/images/localIcon.jpg',
      cardDescription: 'Desde 2016, nuestro local se encuentra en el corazón de Pando, dedicado a la promoción y venta de productos naturales de la más alta calidad.',
    },
    {
      imageDirection: 'right',
      imageSrc: '/images/ecoIcon2.jpg',
      cardDescription: 'Comprar nuestros productos impacta positivamente en el medio ambiente, gracias a nuestra dedicación a prácticas sostenibles y eco-amigables.',
    },
    {
      imageDirection: 'left',
      imageSrc: '/images/veganFree.jpg',
      cardDescription: 'Nos comprometemos con la inclusividad, por eso ofrecemos productos aptos para personas con dietas sin gluten y veganas.',
    },
    {
      imageDirection: 'right',
      imageSrc: '/images/marcaPersonalIcon.png',
      cardDescription: 'Además de trabajar con los mejores proveedores y sus productos, también ofrecemos nuestra propia marca exclusiva.',
    },
    // Agrega más items si es necesario
  ];


  return (
<>
<Navbar/>
<div className=" h-9"></div>
{aboutCardData.map((item, index) => (
        <div key={index}>
          <AboutCard
            imageDirection={item.imageDirection}
            imageSrc={item.imageSrc}
            cardDescription={item.cardDescription}
          />
          <div className="h-9"></div>
        </div>
      ))}
</>
  );
};


