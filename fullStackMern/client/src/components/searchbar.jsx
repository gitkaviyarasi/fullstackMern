import React from 'react'
import { useState } from 'react';
import { searchGoogleBooks } from '../api/googlebook';


function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
 const [books,setBooks] = useState([]);
 const [loading, setLoading] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setErrorMessage('');
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);
    try {
      const books = await searchGoogleBooks(searchTerm);

      if (!books || books.items.length === 0) {
        setErrorMessage(`No books found for "${searchTerm}". Please try again.`);
        return;
      }
      else {
        setBooks(data.items);
      }
    }
      catch (err) {
        console.error('Error during search:', err);
        setErrorMessage('An unexpected error occurred. Please try again.');
        setBooks([]);
      }
      finally {
        setLoading(false);
      }

    }
    return (
        <>
          <div className='search-container'>
            <input
              type="text"
              className="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="search-button" onClick={handleSubmit}>
              Search
            </button>
          </div>
          <main>
            <p className='textme'>Discover the Skills That Ignite Your Passion Today!</p>
            <div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
          </main>
          <section>
          {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="books">
          {books.map((book) => {
            const info = book.volumeInfo;
            return (
              <div key={book.id} className="bookId">
                <img
                  src={info.imageLinks?.thumbnail}
                  alt={info.title}
                  className="bookimage"
                />
                <div>
                  <h2 className="title">{volumeInfo.title}</h2>
                  <p className="text-sm text-gray-700">
                    {info.authors?.join(', ')}
                  </p>
                  <p className="text-sm mt-2 line-clamp-3">{info.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
          </section>
        </>
      );
    }
    
      


export default Searchbar;