import React from "react";
import { Link } from "react-router-dom";
import { UseAppSelector } from "../react/Hook";
const logo = require ("../images/Logo.png");
const avatar  = require ("../images/avatar.jpg");

const Header: React.FC = () => {
    const user = UseAppSelector((state) => state.auth.user)

    return (
        <header>
            <div className='flex bg-white fixed justify-between w-full text-center shadow'>
                <Link to="/">
                    <img src={logo} className='size-10 mx-4 my-2' alt='facebook-logo-img'/>
                </Link>
                <p className='flex my-2 mx-3 px-3 text-3xl'>
                    <img src={avatar} className='size-10 rounded-full mr-1' alt='user-avatar-img'/>
                    {user}
                </p>
            </div>
        </header>
    )
}

export {Header}