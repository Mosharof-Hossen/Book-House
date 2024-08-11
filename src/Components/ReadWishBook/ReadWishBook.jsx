
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPersonShelter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ReadWishBook = ({ book }) => {
    const { bookId, image, bookName, category, author, tags, publisher, totalPages, yearOfPublishing, rating } = book;
    console.log(book);
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <div className=' flex justify-center'>
                <img
                    src={image}
                    alt="Book" className='w-52 h-full ' />
            </div>
            <div className="card-body space-y-2">
                <h2 className="card-title text-2xl font-bold font-playfair-display-y">{bookName}</h2>
                <p>By : {author}</p>
                <p className='font-sans-s'><span className='font-bold'>Tags: </span>
                    {
                        tags.map((tag, inx) => <p className='text-primary-color-c mt-1 inline-block bg-green-100 mr-4 rounded-lg px-2 py-1 ' key={inx}>#{tag}</p>)
                    }
                </p>
                <p className='space-x-5 font-sans-s'><span><FontAwesomeIcon icon={faPersonShelter} className='mr-2' />Publisher: {publisher}</span> <span><FontAwesomeIcon icon={faFileLines} className='mr-2' /> Page: {totalPages}</span></p>
                <p className='font-sans-s'><FontAwesomeIcon icon={faLocationDot} className='mr-2' />Year of publishing: {yearOfPublishing}</p>
                <hr className='mt-3' />
                <div className='font-sans-s space-x-3 '>
                    <button disabled className='mt-2 bg-blue-100 font-semibold text-blue-600 px-3 py-2 rounded-3xl'>Category: {category}</button>
                    <button disabled className='mt-2 bg-orange-100 font-semibold text-orange-600 px-3 py-2 rounded-3xl'>Rating: {rating}</button>
                    <Link to={`/details/${bookId}`}>
                        <button className='mt-2 bg-primary-color-c font-semibold text-white px-3 py-2 rounded-3xl'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

ReadWishBook.propTypes = {
    book: PropTypes.object.isRequired,
};

export default ReadWishBook;