import React from "react";
import { Link } from "react-router-dom";

interface props {
    path: string;
    onClick?: () => void;
    img: string;
    imgAlt: string;
    post: string
}

const SideLink: React.FC<props> = ({path, onClick, img, imgAlt, post }) =>  {
    return (
        <Link to = {path}>
            <div className="nav-button" onClick={onClick}>
                <img src={img} className='size-10 m-1 mx-2 rounded-full' alt={imgAlt}/>
                <p>{post}</p>
            </div>
        </Link>
    )
}

export {SideLink}