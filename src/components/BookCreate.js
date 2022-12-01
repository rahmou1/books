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
    <div>
      <form onSubmit={formSubmitHandler}>
        <label>Title</label>
        <input value={title} onChange={changeLabelHandler} />
        <button>Create</button>
      </form>
    </div>
  );
};

export default BookCreate;
