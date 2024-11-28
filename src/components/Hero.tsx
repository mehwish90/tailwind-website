"use client";
import React from 'react';

const Hero = () => {
  return (
    <section
      className="hero h-screen flex flex-col items-center justify-center md:flex-row bg-cover bg-center"
      style={{ backgroundImage: "url('/heroj.jpg')" }}
    >
      <div className="text-center md:text-left p-4 md:pl-16 text-green-100">
        <h1 className="text-4xl md:text-6xl font-bold text-cadetblue drop-shadow-md">
          Welcome to Our Store
        </h1>
        <p className="text-xl md:text-2xl lg:text-4xl mt-4 text-[rgb(12,11,14)]">
          Discover the best products for you!
        </p>
        <button className="mt-6 px-6  text-white py-3 rounded-lg text-lg md:text-xl font-bold hover:bg-[rgb(0,140,255)] transition duration-300 bg-slate-500 items-center">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
