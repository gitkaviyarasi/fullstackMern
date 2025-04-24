import React,{useState} from "react";
import { searchGoogleBooks } from "../api/googlebook";
import BookCard from "../components/bookCard";
import "../assets/books.css"

function HomePage(){
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setErrorMessage('');
    }

    const handleSubmit = async (e)=> {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');
        try{
            const data = await searchGoogleBooks(searchTerm);
            setBooks(data.items);
            console.log(data.items[0]);
            console.log(data.items[0].volumeInfo.authors)
            console.log("books",books)
        }
        catch(error)
        {
            console.log("error during Search",error);
            setErrorMessage('An unexpected error occurred. Please try again later');
            setBooks([]);
        }
    }
    return(
        <>
        <input type="text"
                placeholder="JavaScript"
                value={searchTerm}
                onChange={handleSearchChange}
        />
        <button onClick={handleSubmit}>Search</button>
        <section id="booklist">
        {/* <div className="grid md:grid-cols-3 gap-4">
    {books.map((book) => (
      <BookCard key={book.id} book={book} />
    ))}
  </div> */}
            <div >
                <dl> {books.map((book)=>{
                    const info = book.volumeInfo;
                    return(
                <dl key={book.id} className="container">
                    <card>
                    <dt className="title">{info.title}</dt>
                   <dd> <img  src={info.imageLinks?.thumbnail} className="image"
                    alt={info.title}></img> </dd>
                   <dd className="author"> <p>Author :{info.authors}</p> </dd>
                    </card>
                    
                </dl>
                    )
                })
                }
                </dl>
            </div>
        </section>
     
        </>
    )
}

export default HomePage;