import React from 'react';
import Image from 'next/image';

const Toys = () => {
  return (
    <div>
      <section className="Toys grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
        <div className="toy-card bg-slate-100 shadow-md rounded-lg p-6 text-center">
          <Image
            src="/bears.jpeg"
            alt="Teddy Bear"
            className="rounded-lg transition-transform duration-300 hover:scale-110"
            width={300}
            height={300}
          />
          <h3 className="mt-5 text-3xl font-bold">Teddy Bear</h3>
          <p className="text-[#338b8b] text-lg">A soft, cuddly teddy bear perfect for hugs and companionship.</p>
          <p className="price text-cadetblue font-bold text-lg mt-2">$200</p>
          <button className="mt-2 bg-slate-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-aqua">Buy Now</button>
        </div>

        <div className="toy-card bg-slate-100 shadow-md rounded-lg p-6 text-center">
          <Image
            src="/monkeys.jpeg"
            alt="Monkey"
            className="rounded-lg transition-transform duration-300 hover:scale-110"
            width={300}
            height={300}
          />
          <h3 className="mt-5 text-3xl font-bold">Monkey</h3>
          <p className="text-[#338b8b] text-lg">A playful and cheeky monkey toy designed to bring endless fun and smiles.</p>
          <p className="price text-cadetblue font-bold text-lg mt-2">$20</p>
          <button className="mt-2 bg-slate-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-aqua">Buy Now</button>
        </div>

        <div className="toy-card bg-slate-100 shadow-md rounded-lg p-6 text-center">
          <Image
            src="/parrots.jpeg"
            alt="Parrot"
            className="rounded-lg transition-transform duration-300 hover:scale-110"
            width={300}
            height={300}
          />
          <h3 className="mt-5 text-3xl font-bold">Parrot</h3>
          <p className="text-[#338b8b] text-lg">A vibrant and colorful parrot toy that sparks imagination and adventure.</p>
          <p className="price text-cadetblue font-bold text-lg mt-2">$230</p>
          <button className="mt-2 bg-slate-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-aqua">Buy Now</button>
        </div>

        <div className="toy-card bg-slate-100 shadow-md rounded-lg p-6 text-center">
          <Image
            src="/dollss.jpeg"
            alt="Cute Doll"
            className="rounded-lg transition-transform duration-300 hover:scale-110"
            width={300}
            height={300}
          />
          <h3 className="mt-5 text-3xl font-bold">Cute Doll</h3>
          <p className="text-[#338b8b] text-lg">A charming and adorable doll, perfect for endless role-playing fun.</p>
          <p className="price text-cadetblue font-bold text-lg mt-2">$1000</p>
          <button className="mt-2 bg-slate-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-aqua">Buy Now</button>
        </div>

        <div className="toy-card bg-slate-100 shadow-md rounded-lg p-6 text-center">
          <Image
            src="/ewtrain.jpeg"
            alt="Kidz Train"
            className="rounded-lg transition-transform duration-300 hover:scale-110"
            width={300}
            height={300}
          />
          <h3 className="mt-5 text-3xl font-bold">Kidz Train</h3>
          <p className="text-[#338b8b] text-lg">A classic toy train set that inspires adventure and endless locomotive fun.</p>
          <p className="price text-cadetblue font-bold text-lg mt-2">$240</p>
          <button className="mt-2 bg-slate-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-aqua">Buy Now</button>
        </div>

        <div className="toy-card bg-slate-100 shadow-md rounded-lg p-6 text-center">
          <Image
            src="/rcarss.jpeg"
            alt="Robot Car"
            className="rounded-lg transition-transform duration-300 hover:scale-110"
            width={300}
            height={300}
          />
          <h3 className="mt-5 text-3xl font-bold">Robot Car</h3>
          <p className="text-[#338b8b] text-lg">A sleek robot car toy combining futuristic design with thrilling remote-controlled action.</p>
          <p className="price text-cadetblue font-bold text-lg mt-2">$203</p>
          <button className="mt-2 bg-slate-500 text-white px-4 py-2 rounded-full transition duration-300 hover:bg-aqua">Buy Now</button>
        </div>
      </section>
    </div>
  );
};

export default Toys;
