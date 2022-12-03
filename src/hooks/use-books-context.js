import { useContext } from "react";
import BooksContext from "../context/book";

const useBooksContext = () => {
  return useContext(BooksContext);
};

export default useBooksContext;
