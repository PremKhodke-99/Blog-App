import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Homepage = ({ user }) => {

  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const getAllBlogs = async () => {
    const response = await axios.get('https://blog-app-i31r.onrender.com/blog');
    const data = response.data;
    console.log(data);

    if (data?.blogs?.length) {
      setBlogs(data.blogs);
    } else {
      setBlogs([]);
    }
  }

  const handleEdit = async (blog) => {
    navigate('/add-blog', {
      state: { blog }
    })
  }

  const handleView = async (blog) => {
    navigate('/view', {
      state: { blog }
    })
  }

  console.log(blogs);

  const handleDelete = async (id) => {
    const response = await axios.delete(`https://blog-app-i31r.onrender.com/blog/deleteBlog/${id}`);
    const data = await response.data;

    if (data.success) {
      toast.success(data.message);
    } else {
      toast.error(data.message)
    }

    getAllBlogs()
  }

  console.log();
  useEffect(() => {
    getAllBlogs();
  }, [])

  return (
    <div className='p-10 flex gap-5 flex-wrap w-full'>
      <div className='w-full flex justify-between'>
        <h1 className='text-xl font-semibold'>All Blogs</h1>
        <button
          onClick={() => navigate('/add-blog')}
          className='bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700'
        >
          Add New Blog
        </button>
      </div>
      {
        blogs.length ? blogs.map((blog) => (
          <Card
            user={user}
            blog={blog}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleView={handleView}
            key={blog._id}
          />
        )) : <div className='h-full w-full flex justify-center items-center animate-spin'>
          <AiOutlineLoading3Quarters className='h-10 w-10' />
        </div>
      }
    </div>
  )
}

export default Homepage