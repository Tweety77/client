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
    function redirect(){
        setIsOpen(prevState => !prevState)
    }

    return (
        <div  className='SideBar'>
            <Link className="sideNav" to="/users">
                <div className="sideContent">
                    <img src={profile} className='logoNav' alt='profile-icon'></img>
                    <p>Users</p>
                </div>
            </Link>
            <Link className="sideNav" to="/">
                <div className="sideContent">
                    <img src={post} className='logoNav1' alt='posts-icon'></img>
                    <p>Posts</p>
                </div>
            </Link>
            <Link className="sideNav">
                <div className="sideContent" onClick={redirect}>
                    <img src={logouticon} className='logoNav' alt='logout-icon'></img>
                    <p>Log out</p>
                </div>
            </Link>
            {isOpen && (
                <div className='PopUpCont'>
                    <div className="PopUp" >
                        <p>Are you sure you want to log out?</p>
                        <div className="PopUpButtons">
                            <button onClick={() => {dispatch(logout()); redirect()}}>Sure</button>
                            <button onClick={redirect}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}