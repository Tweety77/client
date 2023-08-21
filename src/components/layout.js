import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";

export default function Layout() {
    const loggedIn = useSelector((state) => state.auth.isLoggedIn)
    
    return (
        <>
        
            <Header />
            {loggedIn ? 
                <SideBar />
                    :
                    null
            }
            <Outlet />
        </>
    )
}