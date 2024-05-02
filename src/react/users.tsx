import axios from 'axios';
import { useEffect, useState } from 'react';
const avatar = require ("../images/avatar.jpg");

interface username {
  idUser: number;
  FirstName: string;
  LastName: string;
}

type err =  string | null

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<username[]>([])
  const [error, setError] =useState<err>(null)

  useEffect(() =>{
    axios.get(`${process.env.REACT_APP_API}/getusers`)
    .then ((res) =>{
      setUsers(res.data)
      setError(null)
    })
    .catch(err => setError('Couldn`t display users'))
  },[])

  return (
    <div className='flex min-h-screen bg-slate-100 justify-center pt-11'>
        <div className='w-1/2 h-min m-5 bg-white rounded shadow'>
          <ul>
            {users.map((username) =>{
              return <li key={username.idUser} className='flex mb-3 text-lg'>
                <img src={avatar} className='size-10 rounded-full m-1' alt='avatar'/>
                <div className='content-center'>{`${username.FirstName} ${username.LastName}`}</div>
                </li>
            })}
            {error ? <p>{error}</p>: null}
          </ul>
        </div>
    </div>
  );
}

export {UsersList};