import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import UseAuth from '../../components/Hooks/UseAuth';
import SocialLogin from '../SocialLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'; 
import axios from 'axios';

const Login = () => {
    const [toggle, setToggle] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInUser } = UseAuth();
    const location = useLocation();
    const navigate = useNavigate(); 

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const saveUserToDb = async (user) => {
        const userData = {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
        };
        await axios.post('https://book-courier-server-ten.vercel.app/users', userData);
    };

    const handleLogin = (data) => {
        signInUser(data.email, data.password)
            .then(async (result) => {
                await saveUserToDb(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!',
                    text: `Welcome back ${result.user.displayName || ''}`,
                    timer: 1500,
                    showConfirmButton: false
                });
                navigate(location?.state || '/');
            })
            .catch((error) => {
                toast.error(error.code);
            })
    }

    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 py-7 mt-8 mb-8 shadow-2xl">
            <h3 className="text-xl lg:text-3xl text-center mt-5">Welcome back</h3>
            <p className='text-center'>Please Login</p>
            <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input
                        type="email"
                        {...register('email', { required: true })}
                        className="input"
                        placeholder="Email"
                    />
                    {errors.email && <p className='text-red-500 text-sm'>Email is required</p>}
                    <div className='relative'>
                        <label className="label">Password</label>
                        <input
                            type={toggle ? 'text' : 'password'}
                            {...register("password", { required: true })}
                            className="input"
                            placeholder="Password"
                        />
                        <div className='absolute bottom-3.5 right-5 cursor-pointer' onClick={handleToggle}>
                            {toggle ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>
                    {errors.password && <p className='text-red-500 text-sm'>Password is required</p>}
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                <p className='mt-2'>
                    New to BookCourier?{' '}
                    <Link state={location.state} className='text-blue-400 underline' to="/auth/register">
                        Register
                    </Link>
                </p>
            </form>
            <SocialLogin />
        </div>
    )
}

export default Login;