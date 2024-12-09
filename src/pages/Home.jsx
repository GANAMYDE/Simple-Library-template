import React, { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Home = () => {
  const { library } = useContext(LibraryContext);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="container mx-auto p-8 flex-grow">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Your Digital Library</h1>
        {library.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {library.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center mt-8">
            <p className="text-gray-500 text-lg mb-6">No books in your library yet. Add some!</p>
            <img
              src="/images/empty-library.svg"
              alt="Empty Library"
              className="w-64 h-64 mb-6"
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
