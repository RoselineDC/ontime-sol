import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";



const Register = () => {
    // handle error on wrong credentials
    const [message, setMessage] = useState('')
    const {registerUser} = useAuth();
    // handle form submission'
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit =  async (data) => {
        console.log(data);
        try {

            await registerUser(data.email, data.password);
            alert('User created successfully')
        }
        catch{
            setMessage('Error creating user, please try again')
        }
    }
    // handle google login
    const handleGoogleLogin = () => {
        // impliement function to handle google sign in
    }
    return (
        <div className='h-[calc(100vh-120px)] flex items-center justify-center'>
            <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-xl font-semibold mb-4">Please Register</h2>
                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4 flex gap-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fname">
                                First Name
                            </label>
                            <input  {...register("fname", { required: true })}
                                type="fname" name="fname" id="fname" placeholder="Your Name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            >

                            </input>
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lname">
                                Last Name
                            </label>
                            <input  {...register("lname", { required: true })}
                                type="lname" name="lname" id="lname" placeholder="Your Last Name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            >

                            </input>
                        </div>
                    </div>
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
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm_password">
                           Confirm Password                    </label>
                        <input  {...register("confirm_password", { required: true })}
                            type="confirm_password" name="confirm_password" id="confirm_password" placeholder="123@qW$5"
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
                    <div CL>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">
                            Register
                        </button>
                    </div>
                </form>
                <p className="align-baseline font-medium text-sm mt-4">
                    Have and Account? 
                    <Link to="/login" className="text-blue-500 hover:text-blue-700"> Login</Link>
                </p>
                {/* register using google */}
                <div>
                    <button onClick={{ handleGoogleLogin }}
                        className="mt-4 w-full flex flex-wrap gap-1 items-center justify-center bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                        <FaGoogle className="mr-2" />
                        Login with Google

                    </button>
                </div>
                <p>
                    <Link to="/forgot-password" className="text-blue-500 hover:text-blue-700">Forgot Password?</Link>

                </p>
                <p className="text-center text-xs mt-5 text-gray-500">
                    ©2025  Designed by  <Link to="https://www.linkedin.com/in/roseline-dangazela-95b718324/?" className="text-blue-500 hover:text-blue-700">ROSELINE DANGAZELA</Link>


                </p>
            </div>
        </div>
    );
}

export default Register;