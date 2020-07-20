import React, { createContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";
export const BookContext = createContext();
const BookContextProvider = (props) => {
  const [books, setBooks] = useState([]);

  const addBook = (title, auther) => {
    setBooks([...books, { title, auther, id: nanoid() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  useEffect(() => {

  }, [books]);

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
