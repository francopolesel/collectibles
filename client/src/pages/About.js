import React from "react";
import collectibles from "../images/collectibles.png";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${collectibles})` }}
      >
        <div className="bg-black bg-opacity-50 p-8 text-center rounded-lg">
          <h1 className="text-white text-4xl font-bold mb-4">
            About Collectibles
          </h1>
          <p className="text-gray-300 text-lg mb-4">
            Discover a virtual world of collections and connect with fellow
            collectors!
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Welcome to Collectibles
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Collectibles is a platform created by and for collectible
            enthusiasts. Here, you can upload your collection to a virtual world
            where people from around the globe can view it. Likewise, you’ll be
            able to explore and admire other collectors' collections.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our app allows you to connect with other users who share the same
            interests, so you can trade collectibles and expand your collection.
            Whether you're a seasoned collector or just starting out,
            Collectibles offers a space for you to grow your passion and connect
            with like-minded individuals.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-500 py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Features</h2>
        <p className="text-lg mb-6">
          - Upload and showcase your collection in a virtual gallery.
          <br />
          - Browse and explore other collectors' collections.
          <br />
          - Connect with users who share your interests.
          <br />
          - Trade collectibles with fellow enthusiasts.
          <br />
        </p>
        <button className="bg-white text-blue-500 hover:bg-gray-100 font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default About;
