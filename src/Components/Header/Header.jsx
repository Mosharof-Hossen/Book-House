import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {

    const link = <>

        <NavLink to={'/'}  className="px-3 py-2 font-semibold mr-3 hover:text-white rounded hover:bg-primary-color-c">Home</NavLink>
        <NavLink to={'/listed-books'} className="px-3 py-2 font-semibold mr-3  hover:text-white rounded hover:bg-primary-color-c">Listed Books</NavLink>
        <NavLink to={'/pages-to-read'} className="px-3 py-2 font-semibold mr-3  hover:text-white rounded hover:bg-primary-color-c">Pages To Read</NavLink>

    </>

    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                link
                            }
                        </ul>
                    </div>
                    <Link to={"/"} className="  text-xl font-bold">Book House</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            link
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="px-3 py-2 bg-primary-color-c text-white rounded mr-3 font-semibold">Sign In</a>
                    <a className="px-3 py-2 bg-[#59C6D2] text-white rounded mr-3 font-semibold">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Header;