import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LibraryContext } from '../context/LibraryContext';

const Details = () => {
  const { id } = useParams();
  const { library } = useContext(LibraryContext);

  const item = library.find((item) => item.id === parseInt(id));

  if (!item) {
    return <p className="text-center text-xl text-gray-500">Item not found.</p>;
  }

  const imageUrl = require(`../images/${item.coverImage}`);

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg mx-auto">
        <img
          src={imageUrl}
          alt={item.title}
          className="w-full h-72 object-cover rounded-md mb-6"
        />
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">{item.title}</h2>
        <p className="text-xl text-gray-600">By: {item.author}</p>
        <p className="text-lg text-gray-500 mb-4">{item.genre}</p>
        <p className="text-lg text-gray-700">Status: {item.status}</p>
        <div className="mt-6 flex justify-center">
          <button className="bg-indigo-600 text-white py-2 px-6 rounded-full shadow hover:bg-indigo-700 transition duration-300 w-full sm:w-auto">
            Borrow Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
