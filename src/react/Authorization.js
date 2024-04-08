import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../store/authSlice';
import { Navigate } from 'react-router-dom';

function Authorization() {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const user = useSelector((state) => state.auth.user)
    const error = useSelector((state) => state.auth.error)
    const dispatch = useDispatch()

    const submitHandler = e => {
        e.preventDefault();
        dispatch(signin({Email: Email, Password: Password}))
        .then(() =>{
          setEmail('')
          setPassword('')
        })
    }
    
    return(
        <form className="flex flex-col" onSubmit={submitHandler}>
        <input className="reg-button" type="email" placeholder="Email (login)" value={Email} onChange={(e) => setEmail(e.target.value)} required></input>
        <input className="reg-button" type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} required></input>
        <button className="reg-button bg-blue-600 text-white font-bold hover:bg-blue-500 text-xl" type='submit'>Log in</button>
        {error ? <p>{error}</p>: null}
        {user ? <Navigate to='/posts' replace={true} />: null}
        </form>
)}

export default Authorization; 