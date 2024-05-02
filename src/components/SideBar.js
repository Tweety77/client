import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import profile from "../images/pflogo.png";
import post from "../images/psticon.jpg";
import logouticon from "../images/logouticon.png";
import SideLink from "./sidelink";

export default function SideBar() {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const redirect = () => setIsOpen(prevState => !prevState)
    const logoutclick = () =>{
        dispatch(logout()); 
        redirect()
    }

    return (
        <div className='fixed w-1/12 top-14 text-zinc-700 text-2xl'>
            <SideLink path="/users" img={profile} imgAlt='profile-icon' post='Users'/>
            <SideLink path="/posts" img={post} imgAlt='posts-icon' post='Posts'/>
            <SideLink onClick={redirect} img={logouticon} imgAlt='logout-icon' post='Log out'/>
            {isOpen && (
                    <div className="fixed left-1/3 w-1/3 bg-white text-center rounded border shadow py-5" >
                        <p>Are you sure you want to log out?</p>
                        <div className="flex justify-evenly pt-4">
                            <Link to="/">
                                <button className="btn-blue" onClick={logoutclick}>Sure</button>
                            </Link>
                            <button className="btn-blue" onClick={redirect}>Cancel</button>
                        </div>
                    </div>
            )}
        </div>
    )
}