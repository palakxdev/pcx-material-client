import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    const menuItems = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/my-portfolio">My portfolio</Link>
            </li>
            <li>{user && <Link to="/dashboard">Dashboard</Link>}</li>
            <li>
                {user ? (
                    <button
                        onClick={logout}
                        className="btn btn-secondary text-white"
                    >
                        Log out
                    </button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </li>
            <li>
                {user ? (
                    <h4 className="text-primary">
                        <span>username:</span> {user?.displayName}
                    </h4>
                ) : (
                    <div className="hidden"></div>
                )}
            </li>
        </>
    );

    return (
        <>
            <div className="bg-base-100 navbar">
                <div className="navbar-start lg:mx-auto">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {menuItems}
                        </ul>
                    </div>
                    <Link
                        to="/"
                        className="btn btn-ghost normal-case text-xl text-primary"
                    >
                        PCX-MATERIAL
                    </Link>
                </div>

                {/* ---------------for desktop view--------------- */}

                <div className="navbar-center hidden lg:flex mx-auto">
                    <ul className="menu menu-horizontal px-1">{menuItems}</ul>
                </div>
                <div className="navbar-end">
                    <label
                        tabIndex={1}
                        htmlFor="dashboard-sidebar"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                </div>
            </div>
        </>
    );
};

export default Navbar;
