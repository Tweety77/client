import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import profile from "../images/pflogo.png";
import post from "../images/pstsicon.png";
import logouticon from "../images/logouticon.png";

export default function SideBar() {
    const dispatch = useDispatch()
    let [isOpen, setIsOpen] = useState(false);
    const redirect = () => setIsOpen(prevState => !prevState)

    return (
        <div  className='fixed w-1/12 top-14 text-zinc-700 text-2xl'>
            <Link to="/users">
                <div className="nav-button">
                    <img src={profile} className='size-10 m-1 mx-2 rounded-full' alt='profile-icon'/>
                    <p>Users</p>
                </div>
            </Link>
            <Link  to="/posts">
                <div className="nav-button">
                    <img src={post} className='size-10 m-1 mx-2 rounded-lg' alt='posts-icon'/>
                    <p>Posts</p>
                </div>
            </Link>
            <Link>
                <div className="nav-button" onClick={redirect}>
                    <img src={logouticon} className='size-10 m-1 mx-2 rounded-full' alt='logout-icon'/>
                    <p>Log out</p>
                </div>
            </Link>
            {isOpen && (
                    <div className="fixed left-1/3 w-1/3 bg-white text-center rounded border shadow py-5" >
                        <p>Are you sure you want to log out?</p>
                        <div className="flex justify-evenly pt-4">
                            <Link to="/">
                                <button className="py-1 px-4 bg-blue-600 text-white hover:bg-blue-500" onClick={() => {dispatch(logout()); redirect()}}>Sure</button>
                            </Link>
                            <button className="py-1 px-4 bg-blue-600 text-white hover:bg-blue-500" onClick={redirect}>Cancel</button>
                        </div>
                    </div>
            )}
        </div>
    )
}