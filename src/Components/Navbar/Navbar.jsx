import { NavLink, Link } from "react-router-dom";
import { TbBeach } from "react-icons/tb";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {

    const { user, SignOut } = useContext(AuthContext);
    const [showName, setShowName] = useState(false)




    const navLinks =
        <>
            <NavLink to='/'><button className="btn btn-ghost text-xl hover:bg-[#1B1A55] hover:text-white">Home</button></NavLink>

            {
                user ?
                    <>
                        <NavLink to='/profile'><button className="btn btn-ghost text-xl hover:bg-[#1B1A55] hover:text-white">Profile</button></NavLink>
                        <NavLink to="/update"><button className="btn btn-ghost text-xl hover:bg-[#1B1A55]  hover:text-white">Update Profile</button></NavLink>
                        <NavLink to="/cart"><button className="btn btn-ghost text-xl hover:bg-[#1B1A55]  hover:text-white">Cart <FaShoppingCart /> </button></NavLink>
                    </> :
                    ''
            }

        </>


    return (
        <div>
            <div className="navbar bg-[#9290C3] lg:px-20 mx-auto bg-opacity-30 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                            {navLinks}
                            {
                                user ?
                                    <button onClick={SignOut} className="btn btn-ghost bg-white border-none">Log Out</button> :
                                    <Link to="/login" className="btn btn-ghost bg-white border-none">Login</Link>
                            }
                        </ul>
                    </div>
                    <Link to="/" className="text-xs  lg:text-2xl text-white font-bold flex items-center lg:gap-2 bg-[#9290C3] rounded-full lg:px-5 py-2">  <TbBeach /> <h1>Serene Stay Estates</h1></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-5 text-black text-2xl ">
                        {navLinks}
                    </ul>
                </div>


                <div className="navbar-end ">
                    <div >
                        {
                            user ? showName ?
                                <p className="ease-in-out duration-75 font-bold bg-white lg:p-2 rounded-full bg-opacity-10 text-sm lg:text-lg">{user.displayName}</p> :
                                '' : ''
                        }
                    </div>



                    <div className="flex">
                        <div className="avatar mx-4">
                            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 " onMouseOver={() => setShowName(true)} onMouseOut={() => setShowName(false)}>
                                {
                                    user?.photoURL ?
                                        <img src={user.photoURL} alt="" />
                                        :
                                        <Link to="/login">
                                            <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt="" />
                                        </Link>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:inline">
                        {
                            user ?
                                <button onClick={SignOut} className="btn btn-ghost bg-[#1B1A55] border-none text-white">Log Out</button> :
                                <Link to="/login" className="btn btn-ghost bg-[#1B1A55] border-none text-white">Login</Link>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;