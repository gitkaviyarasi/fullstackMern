import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  const info = book.volumeInfo;

  return (
    <Link to={`/books/${book.id}`}>
      <div className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition">
        <h3 className="text-lg font-bold mb-2">{info.title}</h3>
        <img src={info.imageLinks?.thumbnail} alt={info.title} className="mb-2 mx-auto" />
        <p className="text-sm text-gray-700 text-center">{info.authors?.join(', ')}</p>
      </div>
    </Link>
  );
};

export default BookCard;