import '../index.css';
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
    <div className='cont'>
        <div className='users'>
          <ul>
            {users.map((username) =>{
              return <li key={username.idUser} className='liObj'>
                <img src={avatar} className='logoNav2' alt='avatar'></img>
                {username.FirstName + " " + username.LastName}
                </li>
            })}
            {error ? <p>{error}</p>: null}
          </ul>
        </div>
    </div>
  );
}

export default UsersList;