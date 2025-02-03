import React, { useContext } from 'react'
import { AppContext}  from '../context/AppContext'
import Spinner from './Spinner';


const Blogs = () => {
    const {posts,loading} = useContext(AppContext);
  return (
    <div className=' w-11/12 max-w-[750px] backdrop-blur-md bg-blue-400/10 px-9 py-5 flex flex-col gap-y-8 mb-[70px] mt-25 z-0 rounded-3xl border-b-2 border-t-2 border-blue-500 border-b-gray-600'>
        {
            loading ? (<div className='flex justify-center h-screen items-center'>
                <Spinner/>
            </div>) : (posts.length === 0 ? (<div>
                <p>No post available</p>
            </div>) : (posts.map((post)=>(
                <div key={post.id} className='mt-5 mb-5 py-3'>
                    <p className='text-xl font-bold text-[#54a1bf] '>{post.title}</p>
                    <p className='text-[12px] mt-1 mb2 text-white/40'>By <span className='italic'>{post.author}</span>on <span className='underline font-bold'>{post.category}</span></p>
                    <p className='text-[12px] text-white/40 mb-3'>Posted on {post.date}</p>
                    <p className='mt-3 mb-5 text-sm text-white/65'>{post.content}</p>
                    <div className='flex gap-x-3 '>{post.tags.map((tag, index) => {
                        return <span className='mt-[10px] text-xs text-[#758bfd] underline font-bold' key={index}>{`#${tag}`}
                        </span>
                    })}</div>
                    <div className='border-b-2 border-white/15 mt-15'></div>
                </div>
            )))
            )
        }
    </div>
  )
}

export default Blogs