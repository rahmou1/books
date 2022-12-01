import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const changeLabelHandler = (event) => {
    setTitle(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add A new book</h3>
      <form onSubmit={formSubmitHandler}>
        <label>Title</label>
        <input className="input" value={title} onChange={changeLabelHandler} />
        <button className="button">Create</button>
      </form>
    </div>
  );
};

export default BookCreate;
