import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books,setBooks] = useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    
    return (
        <div className="my-12">
            <h1 className="font-playfair-display-y text-4xl font-bold text-center">Books</h1>
            <div className="grid gap-10 mt-10 grid-flow-row md:grid-cols-2 lg:grid-cols-3">
                {
                    books.map((book)=><Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;