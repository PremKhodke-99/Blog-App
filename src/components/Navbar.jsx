import React from 'react'

const Navbar = ({user, handleLogout}) => {

    return (
        <nav className='h-16 w-full border-slate-400 bg-indigo-600 text-white font-semibold pl-4 pr-4 flex justify-between items-center'>
            <h1 className='text-3xl cursor-pointer'><a href="/">Vizmo Blogs</a></h1>
            <div className='text-xl'>
                <h2 className='cursor-pointer'>{user ? <a href='/' onClick={handleLogout}>Logout</a> : <a href="/login">Login</a>}</h2>
            </div>
        </nav>
    )
}

export default Navbar