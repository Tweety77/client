import React from "react";
import { Outlet } from "react-router-dom";
import {Header} from "./header";
import {SideBar} from "./SideBar";
import { UseAppSelector } from "../react/Hook";

const Layout: React.FC = () => {
    const loggedIn = UseAppSelector((state) => state.auth.isLoggedIn)
    
    return (
        <>
            {loggedIn ? 
                <>
                    <Header />
                    <SideBar />
                </>
                :
                null
            }
            <Outlet />
        </>
    )
}

export {Layout}