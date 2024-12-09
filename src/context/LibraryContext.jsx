import React, { createContext, useState } from 'react';

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [library, setLibrary] = useState([
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic',
      status: 'Available',
      coverImage: 'book1.png',
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      genre: 'Dystopian',
      status: 'Borrowed',
      coverImage: 'book2.png',
    },
    // Add more books here
  ]);

  // Function to add a new item to the library
  const addItem = (newItem) => {
    setLibrary((prevLibrary) => [...prevLibrary, newItem]);
  };

  // Function to remove an item from the library
  const removeItem = (id) => {
    setLibrary((prevLibrary) => prevLibrary.filter((item) => item.id !== id));
  };

  return (
    <LibraryContext.Provider value={{ library, addItem, removeItem }}>
      {children}
    </LibraryContext.Provider>
  );
};
