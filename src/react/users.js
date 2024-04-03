import axios from 'axios';
import { useEffect, useState } from 'react';
import avatar from "../images/avatar.jpg";

function UsersList() {
  const [users, setUsers] = useState([])
  const [error, setError] =useState(null)

  useEffect(() =>{
    axios.get('http://localhost:8080/getusers')
    .then(res =>{
      let usernames = []
      res.data.forEach(user => usernames.push(user))
      setUsers(usernames)
      setError(null)
    })
    .catch(err => setError('Couldn`t display users'))
  })

  return (
    <div className='flex min-h-screen bg-slate-100 justify-center pt-11'>
        <div className='w-1/2 h-min m-5 bg-white rounded shadow'>
          <ul>
            {users.map((username) =>{
              return <li key={username.idUser} className='flex mb-3 text-lg'>
                <img src={avatar} className='size-10 rounded-full m-1' alt='avatar'/>
                <div className='content-center'>{username.FirstName + " " + username.LastName}</div>
                </li>
            })}
            {error ? <p>{error}</p>: null}
          </ul>
        </div>
    </div>
  );
}

export default UsersList;