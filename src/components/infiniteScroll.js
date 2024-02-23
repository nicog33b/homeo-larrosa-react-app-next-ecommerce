import { useState, useEffect } from 'react';

const InfiniteScrollComponent = () => {
  const [data, setData] = useState([]); // Datos cargados
  const [loading, setLoading] = useState(false); // Indicador de carga
  const [page, setPage] = useState(1); // Número de página

  // Función para cargar más datos
  const loadMoreData = async () => {
    setLoading(true);

    // Realiza una solicitud a tu API o servidor para obtener más datos
    // Utiliza el valor de 'page' para paginar la solicitud si es necesario

    
    setLoading(false);
  };

  // Observa el scroll de la ventana
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
        !loading
      ) {
        // Cargar más datos cuando el usuario esté cerca del final
        setPage(prevPage => prevPage + 1);
        loadMoreData();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  return (
    <div>
      {/* Renderiza tus datos existentes */}
      {data.map((item, index) => (
        <div key={index}>{item}</div>
      ))}

      {/* Muestra el indicador de carga si está activo */}
      {loading && <div>Cargando...</div>}
    </div>
  );
};

export default InfiniteScrollComponent;
