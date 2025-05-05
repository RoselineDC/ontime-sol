import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import getBaseURL from '../utils/baseURL';

const AdminLogin = () => {
    const [message, setMessage] = useState('')

    // if login succes navugate to home 
    const navigate = useNavigate();
    // handle form submission'
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = async (data) => {
        console.log(data)
        try {
           const response = await axios.post(`${getBaseURL()}/api/auth/admin`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const auth = response.data
            console.log(auth)
            if(auth.token){
                localStorage.setItem('token', auth.token);
                setTimeout(() => {
                    localStorage.removeItem('token')
                    alert('Session expired Please login again')
                    navigate('/')
                }, 3600 * 1000);                
            }
            alert('Successfully logged in as admin')
            navigate('/dashboard')

        }
        catch (error) {
            setMessage('Please provide valid email and password')
            console.error(errors)
        }
    }

    // handle google login
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input  {...register("username", { required: true })}
                            type="text " name="username" id="username" placeholder="username "
                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        >

                        </input>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password                    </label>
                        <input  {...register("password", { required: true })}
                            type="password" name="password" id="password" placeholder="Password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        >

                        </input>
                    </div>
                    {/* error message */}
                    {
                        message && <p className="text-red-500 text-xs italic mb-3">
                            {message}
                        </p>
                    }
                    {/* buttom log in */}
                    <div className='w-full'>
                        <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">
                            LOGIN
                        </button>
                    </div>
                </form>
                
                <p className="text-center text-xs mt-5 text-gray-500">
                    ©2025  Designed by  <Link to="https://www.linkedin.com/in/roseline-dangazela-95b718324/?" className="text-blue-500 hover:text-blue-700">ROSELINE DANGAZELA</Link>


                </p>
            </div>
        </div>
    );
}

export default AdminLogin