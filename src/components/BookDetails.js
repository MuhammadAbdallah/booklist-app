import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li onClick={() => removeBook(book.id)}>
      <div>
        <h3>{book.title}</h3>
      </div>
      <div>
        <small>- by {book.auther} .</small>
      </div>
    </li>
  );
};

export default BookDetails;
