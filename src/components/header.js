import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../images/Logo.png";
import avatar from "../images/avatar.jpg";

export default function Header() {
    const user = useSelector((state) => state.auth.user)
    const loggedIn = useSelector((state) => state.auth.isLoggedIn)
    return (
        <header>
            <div className='Header'>
                <Link className="site-logo" to="/">
                    <img src={logo} className='logo' alt='LOGO'></img>
                </Link>
                {loggedIn ? 
                    <p className='navReg'>
                        <img src={avatar} className='logoNav2' alt='avatar'></img>
                        {user}
                    </p>
                    :
                    <Link className='navReg' to="/Reg">Log in</Link>
                }
            </div>
        </header>
    )
}