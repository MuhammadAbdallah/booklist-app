import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [auther, setAuther] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addBook(title, auther);
    setTitle("");
    setAuther("");
  }
  return (
    <div className="book-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="type the title"
          value={title}
        ></input>
        <input
          type="text"
          onChange={(e) => setAuther(e.target.value)}
          placeholder="type the auther"
          value={auther}
        ></input>
        <input id="submit-btn" type="submit" value="Add Book" />
      </form>
    </div>
  );
};

export default BookForm;
