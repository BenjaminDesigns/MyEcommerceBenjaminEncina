import { useState } from "react";

const ItemListContainer = ({ title, imageSrc, price }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md p-4 text-gray-900">
      <h2 className="text-3xl font-semibold mb-4 text-center">{title}</h2>

      <div
        className="overflow-hidden rounded-md mb-4 cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={imageSrc}
          alt={title}
          className={`w-full h-48 object-cover transition-filter duration-300 ${
            hovered ? "filter-none" : "filter grayscale"
          }`}
        />
      </div>

      <p className="text-lg font-bold mb-4 text-center">${price}</p>

      <div className="flex gap-4">
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition">
          Añadir al carrito
        </button>
        <button className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 rounded-md transition">
          Guardar
        </button>
      </div>
    </div>
  );
};

export default ItemListContainer;
