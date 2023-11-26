import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () =>{
        logOut()
        .then(() =>{})
        .catch(error => console.error(error))
    }
    const navItems = <>
        <li><NavLink to='/'> <FaHome></FaHome> Home</NavLink></li>
        <li tabIndex={0}>
            <details>
                <summary>Others</summary>
                <ul className="p-2">
                    <li><NavLink to='/about'> About</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </details>
        </li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li>
            <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
            </button>
        </li>

    </>

    return (
        <div>
            <div className="navbar max-w-screen-xl bg-gradient-to-b from-white to-90% to-pink-200 fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <img className="h-[60px] w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5_FjG5s3MQ_--DpMZP2wYRhrpJeqRjvYYA&usqp=CAU" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        user ? <div>
                            <div className="dropdown dropdown-end">
                                
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div   className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div >
                                    
                                </label>
                                
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-xl dropdown-content bg-base-100 rounded-box w-[250px]">
                                    <Link to='/dashboard'><li className="p-2 hover:text-blue-600 font-bold hover:underline">See Your Profile</li></Link>
                                    <li className="p-2">{user?.displayName}</li>
                                    <li className="p-2">{user?.email}</li>

                                    <button onClick={handleLogout} className="btn btn-outline btn-sm btn-success w-full">Log Out</button>

                                </ul>
                                
                            </div>
                        </div> : <Link to='/login'>
                            <button className="btn btn-outline btn-info border-2 font-bold mx-5">Login</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;