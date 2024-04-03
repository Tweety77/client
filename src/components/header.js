import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../images/Logo.png";
import avatar from "../images/avatar.jpg";

export default function Header() {
    const user = useSelector((state) => state.auth.user)

    return (
        <header>
            <div className='flex bg-white fixed justify-between w-full text-center shadow'>
                <Link to="/">
                    <img src={logo} className='size-10 mx-4 my-2' alt='LOGO'/>
                </Link>
                <p className='flex my-2 mx-3 px-3 text-3xl'>
                    <img src={avatar} className='size-10 rounded-full mr-1' alt='avatar'/>
                    {user}
                </p>
            </div>
        </header>
    )
}