
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
    const { image, bookName, tags, author, rating } = book;
    console.log(book);
    return (
        <div className="card rounded-lg bg-base-100  border-2 ">
            <figure className="px-10 pt-10 ">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl h-60" />
            </figure>
            <div className="card-body space-y-2">
                <div className=''>
                    {
                        tags.map((tag, inx) => <p className='text-primary-color-c m-1 inline bg-green-100 mr-4 rounded-lg px-2 py-1 ' key={inx}>{tag}</p>)
                    }
                </div>
                <h2 className="text-2xl font-bold font-playfair-display-y">{bookName}</h2>
                <p className='font-semibold text-base'>By : {author} </p>
                <div className='flex justify-between border-t-2 border-dashed pt-3 font-semibold'>
                    <span className=''>Fiction: </span>
                    <span className=''>{rating} <FontAwesomeIcon icon={faStar} /></span>
                </div>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
};

export default Book;