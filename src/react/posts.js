import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import crossicon from '../images/Crossicon.png';
import Post from "../components/post.js";

function Posts() {
  const userId = useSelector((state) => state.auth.userId)
  const [textarea, setTextarea] = useState('')
  const [isOpen, setIsOpen] = useState(false) 
  const redirect = () => setIsOpen(prevState => !prevState)

  const submitHandler = () => {
    axios.post(`${process.env.REACT_APP_API}/createpost`, {text: textarea, userId: userId})
    .then(() =>{
      setTextarea('')
    })
    redirect()
  }

  return (
    <div className='flex min-h-screen bg-slate-100 justify-center pt-11'>
      <div className='w-1/2 mt-2'>
        <button type='button' className='btn-blue mt-3' onClick={redirect}>Create Post</button>
        {isOpen && (
            <div className='fixed bg-white w-1/3 left-1/3 top-1/4 rounded border shadow text-lg pb-4'>
              <div className='flex justify-between items-center border-b pl-1'>
                <b>Create post</b>
                <img className='size-10 m-1 rounded-full' onClick={redirect} src={crossicon} alt='Cancel'/>
              </div>
              <form className="flex flex-col bg-white h-4/5">
                <textarea className='text-2xl resize-none overflow-auto outline-none p-1' rows={6} placeholder="what's on your mind?"  value={textarea} onChange={(e) => setTextarea(e.target.value)} required />
                <button type='button' onClick={submitHandler} className="btn-blue mx-3">Post</button>
              </form>
            </div>
        )}
        <Post/>
      </div>
    </div>
  )
}

export default Posts;