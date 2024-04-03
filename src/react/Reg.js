import Registration from "./Registration.js";
import Authorization from "./Authorization.js";
import React from "react";

function Reg() {
    let [change, setChange] = React.useState(<Authorization />)
    const redirect = () => setChange(prevState => !prevState)

  return (
    <div className=" flex justify-evenly bg-slate-100 h-screen pt-48">
        <div className="w-1/4">
            <p className='text-4xl text-blue-600 font-bold'>
                facebook
            </p>
            <p className="text-2xl">
                Feel free to share whatever you want with the world.
            </p>
        </div>
        <div className='w-1/4 divide-y-5'>
            <div className="flex flex-col bg-white rounded-md shadow-lg mb-4">
                {change ? <Registration /> : <Authorization />}
                <div className="flex my-5 pt-3 mx-5 justify-center border-t">
                    <button className="text-white reg-button bg-green-500 hover:bg-green-400 font-bold w-40 text-xl" onClick={redirect} >{change ? "Log in" : "Sign up"}</button>
                </div>
            </div>
            <p>Create an account, follow your friends and share your impressions.</p>
        </div>
    </div>
  );
}

export default Reg;