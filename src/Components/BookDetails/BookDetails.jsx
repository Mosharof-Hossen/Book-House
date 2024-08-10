import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const { bookId } = useParams();
    const books = useLoaderData();
    const { image, bookName, author, review, tags, totalPages, publisher, yearOfPublishing, rating } = books.find((book) => book.bookId == bookId)


    return (
        <div className="flex container space-y-10 md:space-y-0 flex-col md:flex-row mx-auto p-5 mt-10">
            <div className="flex-1 ">
                <img src={image} alt="" className="w-full mx-auto md:w-2/5" />
            </div>
            <div className="flex-1 pr-10">
                <div className="space-y-3">
                    <h2 className="text-5xl font-bold font-playfair-display-y">{bookName}</h2>
                    <p className='font-semibold text-xl'>By : {author} </p>
                </div>
                <hr className="my-4"/>
                <p className="font-semibold">Fiction</p>
                <hr className="my-4"/>
                <div  className="space-y-3">
                    <p className="text-gray-500 text-base"><span className="font-bold text-black">Review: </span>{review}</p>
                    <p><span className="font-bold">Tag: </span>
                        {
                            tags.map((tag, inx) => <p className='text-primary-color-c m-1 inline bg-green-100 mr-4 rounded-lg px-2 py-1 ' key={inx}>{tag}</p>)
                        }
                    </p>
                </div>
                <hr className="my-4"/>
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

            </div>
        </div>
    );
};

export default BookDetails;