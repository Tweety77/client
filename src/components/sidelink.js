import React from "react";
import { Link } from "react-router-dom";

export default function SideLink(props) {
    return (
            <Link to= {props.path}>
                <div className="nav-button" onClick={props.onClick}>
                    <img src={props.img} className='size-10 m-1 mx-2 rounded-full' alt={props.imgAlt}/>
                    <p>{props.post}</p>
                </div>
            </Link>
    )
}