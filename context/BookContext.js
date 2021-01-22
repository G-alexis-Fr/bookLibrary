import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [book, setBook] = useState({ name: 'One book', isbn: '32453' });

  return (
    <BookContext.Provider value={{ book: book, setBook: setBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
