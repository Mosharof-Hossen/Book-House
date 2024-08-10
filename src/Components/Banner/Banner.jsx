import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="">
            <div className="  ">
                <div className=" bg-base-200 lg:h-[500px] rounded-lg h-fit flex justify-between items-center flex-col lg:flex-row-reverse">
                    <img
                        src="https://i.ibb.co/DKKVfh0/banner-1.png"
                        className="md:max-w-md w-full rounded-lg lg:mr-24" />
                    <div className="lg:ml-32 p-8 lg:p-0">
                        <h1 className="text-5xl font-bold mb-8 font-bold font-playfair-display-y">Books to freshen up your bookshelf</h1>
                        
                        <Link to={"/listed-books"}><button className="px-3 py-2 text-white bg-primary-color-c rounded btn-primary">View The List</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;