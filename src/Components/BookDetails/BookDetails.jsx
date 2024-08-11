
import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const { bookID } = useParams();
    const books = useLoaderData();
    const { bookId, image, bookName, author, review, tags, totalPages, publisher, yearOfPublishing, rating } = books.find((book) => book.bookId == bookID)
    console.log(books);
    const handleReadBtn = (id, cartName) => {

    }
    const handleWishListBtn = (id, cartName) => {

    }

    return (
        <div className="flex container space-y-10 md:space-y-0 flex-col md:flex-row mx-auto p-5 mt-10">
            <div className="flex-1 ">
                <img src={image} alt="" className="w-full mx-auto md:w-3/5" />
            </div>
            <div className="flex-1 pr-10">
                <div className="space-y-3">
                    <h2 className="text-5xl font-bold font-playfair-display-y">{bookName}</h2>
                    <p className='font-semibold text-xl'>By : {author} </p>
                </div>
                <hr className="my-4" />
                <p className="font-semibold">Fiction</p>
                <hr className="my-4" />
                <div className="space-y-3">
                    <p className="text-gray-500 text-base"><span className="font-bold text-black">Review: </span>{review}</p>
                    <p><span className="font-bold">Tag: </span>
                        {
                            tags.map((tag, inx) => <p className='text-primary-color-c m-1 inline bg-green-100 mr-4 rounded-lg px-2 py-1 ' key={inx}>{tag}</p>)
                        }
                    </p>
                </div>
                <hr className="my-4" />
                <div className="flex space-x-8">
                    <div className=" text-gray-500">
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className="font-bold">
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>

                <div className="my-5 space-x-3">
                    <button onClick={() => handleReadBtn(bookId,"readCart")} className="border px-3 py-2 rounded font-bold">Read</button>
                    <button onClick={()=>handleWishListBtn(bookId,"wishlistCart")} className="border px-3 py-2 rounded font-bold text-white bg-[#50B1C9]">Wishlist</button>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;