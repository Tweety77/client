import avatar from "../images/avatar.jpg";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Post() {

      const [posts, setPosts] = useState([])
      const [error, setError] =useState(null)
    
      useEffect(() =>{  
        axios.get(`${process.env.REACT_APP_API}/getposts`)
        .then(res =>{
          let publications = []
          res.data.forEach(post => publications.push(post))
          setPosts(publications)
          setError(null)
        })
        .catch(err => setError('Couldn`t display posts'))
      },[])

    return(
        posts.map((post) =>{
            return <div className='bg-white mt-2 rounded shadow' key={post.PostId}>
            <div className='flex border-b'>
                <img className='size-10 m-1 rounded-full' src={avatar} alt='avatar'/>
                <div>
                <p className='text-xl'>{post.FirstName + " " + post.LastName}</p>
                <p className='text-sm text-gray-400'>{post.postDate}</p>
                </div>
            </div>
            <p className='p-2 text-2xl break-words'>{post.postValue}</p>
            {error ? <p>{error}</p>: null}
            </div>
      })
    )
}