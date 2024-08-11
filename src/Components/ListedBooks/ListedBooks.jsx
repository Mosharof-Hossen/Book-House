import { useEffect, useState } from "react";
import { getStorageCart } from "../../Utilitis/LoaclStorage";
import { useLoaderData } from "react-router-dom";
import ReadWishBook from "../ReadWishBook/ReadWishBook";


const ListedBooks = () => {
    const data = useLoaderData();
    const [tab, setTab] = useState(true);
    const [readBooks, setReadBooks] = useState([]);
    const [wishListBooks, setWishListBooks] = useState([]);

    useEffect(() => {
        const readBooksId = getStorageCart("readCart");
        const filteredReadBooks = data.filter((dt)=>readBooksId.includes(dt.bookId));
        setReadBooks(filteredReadBooks)
        const wishListBooksId = getStorageCart("wishlistCart");
        const filteredWishListBooks = data.filter((dt)=>wishListBooksId.includes(dt.bookId));
        setWishListBooks(filteredWishListBooks)

    }, [data])

    console.log(wishListBooks);

    return (
        <div className="container mx-auto p-5">
            <div className="text-center bg-gray-200 rounded-lg">
                <h1 className="font-bold text-3xl py-5">Books</h1>
            </div>
            <div>
                sorted
            </div>
            <div>
                <div role="tablist" className="tabs tabs-lifted">
                    <a role="tab" onClick={() => setTab(true)} className={tab ? "tab tab-active" : "tab"}>Read Books</a>
                    <a role="tab" onClick={() => setTab(false)} className={tab ? "tab" : "tab tab-active"}>Wishlist Books</a>
                </div>
            </div>
            <div className="space-x-5 space-y-5">
                {
                    readBooks.map((rBook,idx)=><ReadWishBook key={idx} book={rBook}></ReadWishBook>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;