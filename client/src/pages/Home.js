import React from "react";
import collectibles from "../collectibles.png";
import CollectibleCard from "../components/CollectibleCard";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${collectibles})` }}
      >
        <div className="bg-black bg-opacity-50 p-8 text-center rounded-lg">
          <h1 className="text-white text-4xl font-bold mb-4">
            Welcome to Collectibles World
          </h1>
          <p className="text-gray-300 text-lg mb-4">
            Explore our exclusive collection of rare and vintage items
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Explore Now
          </button>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Collectibles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Example of Collectible Item */}
            <CollectibleCard
              image="https://via.placeholder.com/150"
              title="Rare Coin"
              description="Vintage coin from 1800s"
            />
            <CollectibleCard
              image="https://via.placeholder.com/150"
              title="Antique Toy"
              description="Limited edition toy car"
            />
            <CollectibleCard
              image="https://via.placeholder.com/150"
              title="Old Stamp"
              description="Rare stamp from early 1900s"
            />
            <CollectibleCard
              image="https://via.placeholder.com/150"
              title="Vintage Watch"
              description="Classic wristwatch from 1950s"
            />
          </div>
        </div>
      </section>

      {/* Explore Collections Section */}
      <section className="bg-blue-500 py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Explore More Collections</h2>
        <p className="text-lg mb-6">
          Discover rare, vintage, and limited edition items across various
          categories
        </p>
        <button className="bg-white text-blue-500 hover:bg-gray-100 font-bold py-2 px-4 rounded">
          Browse Collections
        </button>
      </section>
    </div>
  );
};

export default Home;
