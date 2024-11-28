import React from 'react';

const Contact = () => {
  return (
    <div className="bg-blue-300 min-h-screen flex items-center justify-center px-4">
      <form className="form w-full max-w-lg bg-slate-100 p-8 shadow-md rounded-lg">
        <h1 className="mb-8 text-center text-4xl md:text-6xl font-bold text-gray-600">
          Contact Us
        </h1>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
          rows=5"
        ></textarea>
        <button
          type="submit"
          className="bg-slate-500 text-white px-4 py-3 rounded-md w-full hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
