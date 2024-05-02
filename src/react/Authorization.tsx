import { useState } from 'react';
import { UseAppDispatch, UseAppSelector } from '../react/Hook';
import { signin } from '../store/authSlice';
import { Navigate } from 'react-router-dom';

type err =  string | null

const Authorization: React.FC = () => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const user = UseAppSelector((state) => state.auth.user)
    const dispatch = UseAppDispatch()
    const [error, setError] =useState<err>(null)

    const submitHandler : React.FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        dispatch(signin({Email: Email, Password: Password}))
        .then(() =>{
          localStorage.setItem('user', JSON.stringify({Email: Email, Password: Password}))
          setEmail('')
          setPassword('')
          setError(null)
        })
        .catch((res)=> {res = setError(res.err)}

        )
    }
    
    return(
        <form className="flex flex-col" onSubmit={submitHandler}>
        <input className="form-elem" type="email" placeholder="Email (login)" value={Email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="form-elem" type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn-blue form-elem" type='submit'>Log in</button>
        {error ? <p>{error}</p>: null}
        {user ? <Navigate to='/posts' replace={true} />: null}
        </form>
)}

export default Authorization; 