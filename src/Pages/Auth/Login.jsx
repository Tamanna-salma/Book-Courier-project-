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
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950 py-12 px-4 transition-colors duration-300">
            <div className="card bg-white dark:bg-slate-900 w-full max-w-md shadow-2xl rounded-[2.5rem] border border-gray-100 dark:border-slate-800 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-600 to-purple-600"></div>
                <div className="p-10">
                    <h3 className="text-3xl font-black text-center text-gray-800 dark:text-white mb-2 tracking-tight">Welcome Back</h3>
                    <p className='text-center text-gray-500 dark:text-gray-400 font-bold mb-8'>Sign in to continue your journey</p>
                    <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
                        <div className="space-y-2">
                            <label className="text-sm font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest pl-1">Email Address</label>
                            <input
                                type="email"
                                {...register('email', { required: true })}
                                className="w-full bg-gray-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 text-gray-800 dark:text-white focus:ring-2 focus:ring-cyan-600 transition-all font-bold"
                                placeholder="name@example.com"
                            />
                            {errors.email && <p className='text-rose-500 text-xs font-bold pl-1'>Email is required</p>}
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center pr-1">
                                <label className="text-sm font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest pl-1">Password</label>
                                <button type="button" className="text-xs font-black text-cyan-600 hover:text-cyan-700 uppercase tracking-widest">Forgot?</button>
                            </div>
                            <div className='relative'>
                                <input
                                    type={toggle ? 'text' : 'password'}
                                    {...register("password", { required: true })}
                                    className="w-full bg-gray-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 text-gray-800 dark:text-white focus:ring-2 focus:ring-cyan-600 transition-all font-bold"
                                    placeholder="••••••••"
                                />
                                <div className='absolute inset-y-0 right-0 pr-6 flex items-center cursor-pointer text-gray-400 hover:text-cyan-600 transition-colors' onClick={handleToggle}>
                                    {toggle ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                </div>
                            </div>
                            {errors.password && <p className='text-rose-500 text-xs font-bold pl-1'>Password is required</p>}
                        </div>

                        <button className="w-full py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-cyan-600/20 active:scale-95 uppercase tracking-widest text-sm mt-4">
                            Login Securely
                        </button>

                        <p className='text-center text-sm font-bold text-gray-500 dark:text-gray-400 mt-6'>
                            New to BookCourier?{' '}
                            <Link state={location.state} className='text-cyan-600 hover:underline' to="/auth/register">
                                Create Account
                            </Link>
                        </p>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-100 dark:border-slate-800"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase tracking-[0.3em] font-black text-gray-400 bg-white dark:bg-slate-900 px-4">
                            Or Connect With
                        </div>
                    </div>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;