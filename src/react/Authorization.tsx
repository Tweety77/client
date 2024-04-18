import { useState } from 'react';
import { UseAppDispatch, UseAppSelector } from '../react/Hook';
import { signin } from '../store/authSlice';
import { Navigate } from 'react-router-dom';

const Authorization: React.FC = () => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const user = UseAppSelector((state) => state.auth.user)
    const dispatch = UseAppDispatch()

    const submitHandler : React.FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        dispatch(signin({Email: Email, Password: Password}))
        .then(() =>{
          setEmail('')
          setPassword('')
        })
    }
    
    return(
        <form className="flex flex-col" onSubmit={submitHandler}>
        <input className="form-elem" type="email" placeholder="Email (login)" value={Email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="form-elem" type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn-blue form-elem" type='submit'>Log in</button>
        {user ? <Navigate to='/posts' replace={true} />: null}
        </form>
)}

export default Authorization; 