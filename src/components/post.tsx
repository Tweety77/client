import axios from 'axios';
import { useEffect, useState } from 'react';
const avatar  = require ("../images/avatar.jpg");

interface post {
  PostId: number;
  FirstName: string;
  LastName: string;
  postDate: string;
  postValue: string;
  publications: string[];
}

type err =  string | null


const Post : React.FC = () => {

      const [posts, setPosts] = useState<post[]>([])
      const [error, setError] =useState<err>(null)
      useEffect(() =>{  
        axios.get(`${process.env.REACT_APP_API}/getposts`)
        .then ((res) =>{
          setPosts(res.data)
          setError(null)
        })
        .catch(err => setError('Couldn`t display posts'))
      },[posts])

    return(
        posts.map((post) =>{
            return <div className='bg-white mt-2 rounded shadow' key={post.PostId}>
            <div className='flex border-b'>
                <img className='size-10 m-1 rounded-full' src={avatar} alt='user-avatar'/>
                <div>
                <p className='text-xl'>{`${post.FirstName} ${post.LastName}`}</p>
                <p className='text-sm text-gray-400'>{post.postDate}</p>
                </div>
            </div>
            <p className='p-2 text-2xl break-words'>{post.postValue}</p>
            {error ? <p>{error}</p>: null}
            </div>
      })
    )
}

export {Post}