import axios from 'axios';
import React, { useState } from 'react'
import { BiHide, BiShow } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = ({ updateUser }) => {

    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
    });
    const [viewPassword, setViewPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value
        });
    }

    const handleViewPassword = (e) => {
        e.preventDefault();
        setViewPassword(prev => !prev);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${process.env.BACKEND_API}/user/login`, userDetails);
        const data = await response.data;
        // console.log(data);
        if (data.success) {
            updateUser(data.user);
            toast.success(data.message);
            navigate('/')
        } else {
            toast.error(data.message);
        }
    }

    return (
        <div className='h-2/3 flex flex-col justify-center items-center mt-16'>
            <h1 className='text-4xl font-bold mb-4'>Login Form</h1>
            <div className='h-auto w-1/3 border-2 border-indigo-100 rounded-2xl p-10 text-xl'>
                <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email" className='font-bold'>Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={userDetails.email}
                            className='border-solid border-2 rounded-lg border-slate-400 p-2 focus:outline-indigo-400'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-2 mb-3'>
                        <label htmlFor="password" className='font-bold'>Password</label>
                        <div className='border-solid border-2 border-slate-400 rounded-lg flex justify-between'>
                            <input
                                type={viewPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                value={userDetails.password}
                                className='border-solid border-slate-400 rounded-l-md w-[90%] p-2 focus:outline-indigo-400'
                                onChange={handleChange}
                                required
                            />
                            <button
                                onClick={handleViewPassword}
                                className='pr-3'>
                                {viewPassword ? <BiHide /> : <BiShow />}
                            </button>
                        </div>
                    </div>
                    <button type='submit' className='bg-indigo-600 p-2 text-white rounded-lg font-bold hover:bg-indigo-700'>Login</button>
                    <p className='text-center text-lg'>Not registered yet? <Link to="/signup" className='text-indigo-800 underline'>Click here</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login