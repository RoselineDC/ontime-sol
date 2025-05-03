import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/authContext';

const AdminLogin = () => {
    const [message, setMessage] = useState('')
    const { loginUser, signInWithGoogle} = useAuth();
    // if login succes navugate to home 
    const navigate = useNavigate();
    // handle form submission'
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
                    

        }
        catch (error) {
            setMessage('Please provide valid email and password')
            console.error(errors)
        }
    }

    // handle google login
    const handleGoogleLogin = async () => {
        // implement function to handle Google sign-in
        try {
            await signInWithGoogle();
            alert('Login successful');
            // navigate to home page
            navigate('/');
        } catch (error) {
            alert('Google sign-in failed: ' + error.message);
            console.error(error);
        }
    };
    return (
        <div className='h-[calc(100vh-120px)] flex items-center justify-center'>
            <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-xl font-semibold mb-4">Please Login</h2>
                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input  {...register("email", { required: true })}
                            type="email" name="email" id="email" placeholder="lynne@gmail.com"
                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        >

                        </input>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password                    </label>
                        <input  {...register("password", { required: true })}
                            type="password" name="password" id="password" placeholder="123@qW$5"
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
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">
                            Login
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