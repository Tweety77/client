import '../index.css';
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
        <form className="Form2" onSubmit={submitHandler}>
        <input type="email" placeholder="Email (login)" value={Email} onChange={(e) => setEmail(e.target.value)} required></input>
        <input type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} required></input>
        <button type='submit' className="signButton">Log in</button>
        {error ? <p>{error}</p>: null}
        {user ? <Navigate to='/' replace={true} />: null}
        </form>
)}

export default Authorization;