import { useState } from 'react';
import { UseAppDispatch, UseAppSelector } from '../react/Hook';
import { signup } from '../store/authSlice';
import { Navigate } from 'react-router-dom';

const Registration: React.FC = () => {

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const user = UseAppSelector((state) => state.auth.user)
    const dispatch = UseAppDispatch()

    const submitHandler : React.FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault()
        dispatch(signup({FirstName: FirstName, LastName: LastName, Email: Email, Password: Password}))
        .then(() =>{
          setFirstName('')
          setLastName('')
          setEmail('')
          setPassword('')
        })

    }

    return(
      <form className="flex flex-col" onSubmit={submitHandler}>
      <input className="form-elem" type="text" placeholder="First name" value={FirstName} onChange={(e) => setFirstName(e.target.value)} required />
      <input className="form-elem" type="text" placeholder="Last name" value={LastName} onChange={(e) => setLastName(e.target.value)} required />
      <input className="form-elem" type="email" placeholder="Email (login)" value={Email} onChange={(e) => setEmail(e.target.value)} required />
      <input className="form-elem" type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} required />
      <button className="btn-blue form-elem" type='submit'>Sign up</button>
      {user ? <Navigate to='/posts' replace={true} />: null}
      </form>
)}

export default Registration;