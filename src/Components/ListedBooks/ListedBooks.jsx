import { useEffect, useState } from "react";
import { getStorageCart } from "../../Utilitis/LoaclStorage";
import { useLoaderData } from "react-router-dom";
import ReadWishBook from "../ReadWishBook/ReadWishBook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";


const ListedBooks = () => {
    const data = useLoaderData();
    const [tab, setTab] = useState(true);
    const [readBooks, setReadBooks] = useState([]);
    const [wishListBooks, setWishListBooks] = useState([]);

    useEffect(() => {
        const readBooksId = getStorageCart("readCart");
        const filteredReadBooks = data.filter((dt) => readBooksId.includes(dt.bookId));
        setReadBooks(filteredReadBooks)
        const wishListBooksId = getStorageCart("wishlistCart");
        const filteredWishListBooks = data.filter((dt) => wishListBooksId.includes(dt.bookId));
        setWishListBooks(filteredWishListBooks)

    }, [data])

    console.log(wishListBooks);

    const handleDropDownMenu = (type) => {
        if (type == "rating") {
            let copyReadBooks = [...readBooks];
            copyReadBooks.sort((a, b) => a.rating - b.rating);
            setReadBooks(copyReadBooks);

            let copyWishListBooks = [...wishListBooks];
            copyWishListBooks.sort((a, b) => a.rating - b.rating);
            setWishListBooks(copyWishListBooks);
        }
    }
    return (
        <div className="container mx-auto p-5">
            <div className="text-center bg-gray-200 rounded-lg">
                <h1 className="font-bold text-3xl py-5">Books</h1>
            </div>
            <div className="my-12 flex justify-center" >
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className=" text-center btn m-1 text-white bg-primary-color-c">Sorted By <FontAwesomeIcon icon={faArrowDown} /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-200 text-center font-semibold rounded-box z-[1] w-44 p-2 shadow">
                        <li onClick={() => handleDropDownMenu("rating")}><a>Rating</a></li>
                        <li onClick={() => handleDropDownMenu("pageNumber")}><a>Number Of Pages</a></li>
                        <li onClick={() => handleDropDownMenu("year")}><a>Publisher year</a></li>
                    </ul>
                </div>
            </div>
            <div className="my-12 font-bold">
                <div role="tablist" className="tabs tabs-lifted">
                    <a role="tab" onClick={() => setTab(true)} className={tab ? "tab tab-active" : "tab"}>Read Books</a>
                    <a role="tab" onClick={() => setTab(false)} className={tab ? "tab" : "tab tab-active"}>Wishlist Books</a>
                </div>
            </div>
            <div className="space-x-5 space-y-5 md:w-3/4 mx-auto">

                {
                    tab ?
                        readBooks.map((rBook, idx) => <ReadWishBook key={idx} book={rBook}></ReadWishBook>)
                        :
                        wishListBooks.map((rBook, idx) => <ReadWishBook key={idx} book={rBook}></ReadWishBook>)

                }
            </div>
        </div>
    );
};

export default ListedBooks;