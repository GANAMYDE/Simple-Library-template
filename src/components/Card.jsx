import React, { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';
import '../index.css';

const Card = ({ item }) => {
  const { removeItem } = useContext(LibraryContext);

  const handleRemove = () => {
    const confirmDelete = window.confirm(`Are you sure you want to remove "${item.title}" from your library?`);
    if (confirmDelete) {
      removeItem(item.id);  // Remove the book by its ID
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
      {/* Book Image Container */}
      <div className="relative w-64 h-96">
        <img
          src={`/images/${item.coverImage}`}
          alt={item.title}
          className="object-cover w-full h-full rounded-lg"
          onError={(e) => e.target.src = '/images/empty-library.svg'}  // Fallback image
        />
      </div>

      {/* Book Details */}
      <div className="p-4">
        <h2 className="font-semibold text-xl text-gray-800 mb-2">{item.title}</h2>
        <p className="text-gray-500 text-sm mb-1">Author: {item.author}</p>
        <p className="text-gray-500 text-sm mb-1">Genre: {item.genre}</p>
        <p className="text-gray-500 text-sm mb-4">Status: {item.status}</p>

        <button
          onClick={handleRemove}
          className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-full w-full mt-3 transition duration-300 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;
