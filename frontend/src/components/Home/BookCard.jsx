import { CiSquareInfo } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book, index) => (
        <div
          className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-lg"
          key={book._id}
        >
          <h2 className="absolute top-1 right-1 px-4 py-1 bg-red-300 rounded-lg">
            {book.year}
          </h2>
          <h4 className="my-2 text-gray-500">{index+1}</h4>
          <div className="flex justify-start items-center gap-x-2">
            <h2 className="my-1">{book.title}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <h2 className="my-1">{book.author}</h2>
          </div>
          <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
            <Link to={`/books/about/${book._id}`}>
              <CiSquareInfo className="text-4xl text-green-800" />
            </Link>
            <Link to={`/books/update/${book._id}`}>
              <FaEdit className="text-2xl text-blue-800" />
            </Link>
            <Link to={`/books/delete/${book._id}`}>
              <AiOutlineDelete className="text-3xl text-red-800" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BooksCard;