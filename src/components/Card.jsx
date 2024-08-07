import React from 'react'
import { GrView } from 'react-icons/gr'
import { MdDeleteSweep, MdEditNote } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Card = ({ user, blog, handleDelete, handleEdit, handleView }) => {


    return (
        <div className='w-[32%] max-h-64 border-2 border-solid border-indigo-100 p-4 rounded-xl shadow-lg flex flex-col gap-3 overflow-hidden'>
            <h1 className='text-2xl font-semibold'>{blog?.title}</h1>
            <p className='text-lg text-ellipsis overflow-hidden'>{blog?.content}</p>
            <p className='text-sm text-slate-600'>Author: {blog.author}</p>
            <div className='flex gap-2 justify-end items-end'>
                <button
                    onClick={() => handleView(blog)}
                    className='w-10 h-10 bg-green-600 text-white rounded-lg flex justify-center items-center text-2xl hover:bg-green-700'
                >
                    <GrView />
                </button>
                {
                    user && user._id === blog.authorId && (<>
                        <button
                            onClick={() => handleEdit(blog)}
                            className='w-10 h-10 bg-indigo-600 text-white rounded-lg flex justify-center items-center text-2xl hover:bg-indigo-700'
                        >
                            <MdEditNote />
                        </button>
                        <button
                            onClick={() => handleDelete(blog._id)}
                            className='w-10 h-10 bg-red-600 text-white rounded-lg flex justify-center items-center text-2xl hover:bg-red-700'>
                            <MdDeleteSweep />
                        </button>
                    </>
                    )
                }
            </div>
        </div>
    )
}

export default Card