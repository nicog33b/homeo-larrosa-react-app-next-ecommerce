import React from "react";
import ProductRow from "./productRow"; // Asegúrate de importar el componente de fila

const OptionsModal = ({ isOpen, onClose, productos }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-start justify-start z-50 ">
      <div className="w-1/4 h-full bg-white">
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={onClose}
        >
          Cerrar
        </button>
        <div className="text-2xl w-full text-center font-sans bg-green-300 rounded">
          ¡Bienvenido!
        </div>

        {/* Contenido */}
       
      </div>
    </div>
  );
};

export default OptionsModal;
