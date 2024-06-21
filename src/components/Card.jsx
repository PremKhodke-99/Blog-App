import React from 'react'
import { MdDeleteSweep, MdEditNote } from 'react-icons/md'

const Card = ({ user, blog, handleDelete, handleEdit }) => {

    return (
        <div className='w-[32%] max-h-64 border-2 border-solid border-indigo-100 p-4 rounded-xl shadow-lg flex flex-col gap-3 overflow-hidden'>
            <h1 className='text-2xl font-semibold'>{blog?.title}</h1>
            <p className='text-lg text-ellipsis overflow-hidden'>{blog?.content}</p>
            <div className='flex gap-2 justify-end items-end'>
                {
                    user && (<>
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