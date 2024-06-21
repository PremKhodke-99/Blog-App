import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddBlog = ({ user }) => {

  const [blogDetails, setBlogDetails] = useState({
    title: '',
    content: '',
    id: user._id
  });
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setBlogDetails({
      ...blogDetails,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = location.state ? (
      await axios.put(`https://blog-app-i31r.onrender.com/blog/editBlog/${location.state.blog._id}`, blogDetails)
    ) : (
      await axios.post('https://blog-app-i31r.onrender.com/blog/addBlog', blogDetails)
    )

    const data = await response.data;

    console.log(data);
    if (data.success) {
      toast.success(data.message);
      setBlogDetails({
        title: '',
        content: '',
      });
      navigate('/');
    } else {
      toast.error(data.message);
    }
  }

  useEffect(() => {
    if (location.state) {
      const { blog } = location.state;
      setBlogDetails({
        title: blog.title,
        content: blog.content
      })
    }
  }, [])

  return (
    <div className='p-10'>
      <h1 className='text-xl font-semibold mb-4'>Add New Blog</h1>
      <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
          <label htmlFor="title" className='font-bold'>Title</label>
          <input
            type="text"
            name='title'
            id='title'
            required
            value={blogDetails.title}
            onChange={handleChange}
            className='border-solid border-2 rounded-lg border-slate-400 p-2 focus:outline-indigo-400'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="content" className='font-bold'>Content</label>
          <textarea
            name="content"
            id="content"
            rows='8'
            required
            value={blogDetails.content}
            onChange={handleChange}
            className='border-solid border-2 rounded-lg border-slate-400 p-2 focus:outline-indigo-400'
          />
        </div>
        <button type='submit' className='bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 w-24'>Add</button>
      </form>
    </div>
  )
}

export default AddBlog