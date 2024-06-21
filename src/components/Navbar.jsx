import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ user, handleLogout }) => {

    return (
        <nav className='h-16 w-full border-slate-400 bg-indigo-600 text-white font-semibold pl-4 pr-4 flex justify-between items-center'>
            <h1 className='text-3xl cursor-pointer'><Link to="/">Vizmo Blogs</Link></h1>
            <div className='text-xl'>
                <h2 className='cursor-pointer'>{user ? <Link to='/' onClick={handleLogout}>Logout</Link> : <Link to="/login">Login</Link>}</h2>
            </div>
        </nav>
    )
}

export default Navbar