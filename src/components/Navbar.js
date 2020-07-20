import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
const Navbar = () => {
  const { books } = useContext(BookContext);
  const bookOrBooks = books.length === 1 ? "book" : "books";
  return (
    <div className="navbar">
      <h2>Reading List</h2>
      <p>
        {books.length} {bookOrBooks} to read
      </p>
    </div>
  );
};

export default Navbar;
