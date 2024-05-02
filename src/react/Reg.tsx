import Registration from "./Registration";
import Authorization from "./Authorization";
import React from "react";

const Reg: React.FC = () => {
    const [change, setChange] = React.useState(true)
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
                {change ? <Authorization /> : <Registration />  }
                <div className="flex my-5 pt-3 mx-5 justify-center border-t">
                    <button className="btn-green" onClick={redirect} >{change ? "Sign up" : "Log in"}</button>
                </div>
            </div>
            <p>Create an account, follow your friends and share your impressions.</p>
        </div>
    </div>
  );
}

export {Reg};