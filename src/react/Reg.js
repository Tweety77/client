import '../index.css';
import Registration from "./Registration.js";
import Authorization from "./Authorization.js";
import React, {useState} from "react";

function Reg() {
    let [change, setChange] = React.useState(<Authorization />)
    function redirect(){
        setChange(prevState => !prevState)
    }
  return (
<div className="cont" id='Reg'>
        <div className="Greet">
            <p className='title'>
                facebook
            </p>
            <p>
                Feel free to share whatever you want with the world.
            </p>
        </div>
        <div className='FormCont'>
            <div className="Form">
                {change ? <Registration /> : <Authorization />}
                <div className="upperscore">
                    <button className="logButton" onClick={redirect} >{change ? "Log in" : "Sign up"}</button>
                </div>
            </div>
            <p>Create an account, follow your friends and share your impressions.</p>
        </div>
    </div>
  );
}

export default Reg;
