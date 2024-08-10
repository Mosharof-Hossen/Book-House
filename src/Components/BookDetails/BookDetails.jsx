import { useLoaderData } from "react-router-dom";


const BookDetails = () => {
    const books = useLoaderData();
    console.log(books);
    return (
        <div>
            bookDetails
        </div>
    );
};

export default BookDetails;