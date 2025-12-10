import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, Navigate, useLocation, useNavigate,  } from 'react-router';
import UseAuth from '../../components/Hooks/UseAuth';
import SocialLogin from '../SocialLogin';

const Login = () => {
  const { register,  handleSubmit, formState: { errors } } = useForm();
    const {signInUser} = UseAuth();
    const location = useLocation();
    console.log('in the login page',location);
    const Navigate = useNavigate();


    const handleLogin = (data) => {
        console.log('form data', data);
           signInUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                Navigate(location?.state || '/')
            })
            .catch(error => {
                console.log(error)
            })
    }

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 py-7 mt-8 mb-8 shadow-2xl">
            <h3 className="text-xl lg:text-3xl text-center mt-5">Welcome back</h3>
            <p className='text-center'>Please Login</p>
            <form className="card-body" onSubmit={ handleSubmit(handleLogin)} >
                <fieldset className="fieldset">
                    {/* email field */}
                    <label className="label">Email</label>
                    <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                    {
                        errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>
                    }

                    {/* password field */}
                    <label className="label">Password</label>
                    <input type="password" {...register('password', { required: true, minLength: 6 })} className="input" placeholder="Password" />
                    {
                        errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters  or longer </p>
                    }


                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                <p>New to BookCourier <Link
                    state={location.state}
                    className='text-blue-400 underline'
                    to="/register">Register</Link></p>
            </form>
      <SocialLogin></SocialLogin>
        </div>
  )
}

export default Login