import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../store/authSlice';
import { Navigate } from 'react-router-dom';

function Registration() {

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const user = useSelector((state) => state.auth.user)
    const error = useSelector((state) => state.auth.error)
    const dispatch = useDispatch()

    const submitHandler = e => {
        e.preventDefault()
        dispatch(signup({FirstName: FirstName, LastName: LastName, Email: Email, Password: Password}))
        .then((res) =>{
          setFirstName('')
          setLastName('')
          setEmail('')
          setPassword('')
        })

    }

    return(
      <form className="flex flex-col" onSubmit={submitHandler}>
      <input className="reg-button" type="text" placeholder="First name" value={FirstName} onChange={(e) => setFirstName(e.target.value)} required></input>
      <input className="reg-button" type="text" placeholder="Last name" value={LastName} onChange={(e) => setLastName(e.target.value)} required></input>
      <input className="reg-button" type="email" placeholder="Email (login)" value={Email} onChange={(e) => setEmail(e.target.value)} required></input>
      <input className="reg-button" type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} required></input>
      <button className="reg-button bg-blue-600 text-white font-bold hover:bg-blue-500 text-xl" type='submit'>Sign up</button>
      {error ? <p>{error}</p>: null}
      {user ? <Navigate to='/posts' replace={true} />: null}
      </form>
)}

export default Registration;