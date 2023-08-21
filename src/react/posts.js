import '../index.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import crossicon from '../images/Crossicon.png';
import avatar from "../images/avatar.jpg";

function Home() {
  const [posts, setPosts] = useState([])
  const [error, setError] =useState(null)
  const userId = useSelector((state) => state.auth.userId)
  const [textarea, setTextarea] = useState('')
  let [isOpen, setIsOpen] = useState(false) 
  const loggedIn = useSelector((state) => state.auth.isLoggedIn)

  function redirect(){
    setIsOpen(prevState => !prevState)
  }

  function submitHandler (e) {
    axios.post('http://localhost:8080/createpost', {text: textarea, userId: userId})
    .then((data) =>{
      setTextarea('')
    })
  }

  useEffect(() =>{
    axios.get('http://localhost:8080/getposts')
    .then(res =>{
      let publications = []
      res.data.forEach(post => publications.push(post))
      setPosts(publications)
      setError(null)  
    })
    .catch(err => setError('Couldn`t display posts'))
  })

  return (
    <div className='cont'>
      <div className='posts'>
        {loggedIn ? 
          <button type='button' className='signButton' onClick={redirect}>Create Post</button>
          :
          null
        }
        {isOpen && (
            <div className='popUpPost'>
              <div className='popHeader'>
                <b>Create post</b>
                <img className='logoNav' onClick={redirect} src={crossicon} alt='Cancel'></img>
              </div>
              <form className="Form3">
                <textarea  className='postArea' rows={6} placeholder="what's on your mind?"  value={textarea} onChange={(e) => setTextarea(e.target.value)} required />
                <button type='button' onClick={() => {submitHandler(); redirect()}} className="signButton" id='postButton'>Post</button>
              </form>
            </div>
        )}
        {posts.map((post) =>{
          return <div className='postAll' key={post.postId}>
            <div className='eachPost'>
              <img className='logoNav' src={avatar} alt='avatar'></img>
              <div className='eachUserDate'>
                <p>{post.FirstName + " " + post.LastName}</p>
                <p className='dateSmall'>{post.postDate}</p>
              </div>
            </div>
            <p className='postValue'>{post.postValue}</p>
            </div>
        })}
          {error ? <p>{error}</p>: null}
      </div>
    </div>
)}

export default Home;  