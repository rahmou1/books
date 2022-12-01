import { useState } from "react";
import BookCreate from "./components/BookCreate";

const App = () => {
  const [books, setBooks] = useState([]);

  const createBookHandler = (title) => {
    console.log("Need to add book with that title", title);
  };

  return (
    <div>
      <BookCreate onCreate={createBookHandler} />
    </div>
  );
};
export default App;
