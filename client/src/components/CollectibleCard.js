import React from "react";

const CollectibleCard = ({ image, title, description }) => {
  return (
    <div className="collectible-card bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover mb-4 rounded transition-opacity duration-300 hover:opacity-80"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default CollectibleCard;
