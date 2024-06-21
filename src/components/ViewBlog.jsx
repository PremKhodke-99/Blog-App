import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ViewBlog = ({ user }) => {

    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.state);

    return (
        <div className='p-4 h-[80%] relative'>
            <h1 className='text-3xl mb-5 font-bold text-center'>{location.state.blog.title}</h1>
            <pre className='text-xl p-2'>{location.state.blog.content}</pre>
            <p className='text-sm mt-4 p-2'>Author: {location.state.blog.author}</p>

            {/* {
                user && <div className='absolute bottom-0 left-[50%] -translate-x-1/2 grid grid-cols-2  gap-2'>
                    <button className='w-24 h-auto p-2 bg-indigo-600 text-white rounded-lg flex justify-center items-center text-xl hover:bg-indigo-700'>Edit</button>
                    <button className='w-24 h-auto p-2 bg-red-600 text-white rounded-lg flex justify-center items-center text-xl hover:bg-red-700'>Delete</button>
                </div>
            } */}
        </div>
    )
}

export default ViewBlog