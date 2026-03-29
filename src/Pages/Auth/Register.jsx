import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import UseAuth from "../../components/Hooks/UseAuth";
import SocialLogin from "../SocialLogin";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { imageUpload } from "../../utilites";
import axios from "axios";

const Register = () => {
  const [toggle, setToggle] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const { registeruser, updateUserProfile } = UseAuth();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const saveUserToDb = async (user) => {
    const userData = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    };
    await axios.post('https://book-courier-server-ten.vercel.app/users', userData);
  };

  const handleRegistration = async (data) => {
    try {
      const imageFile = data.photo[0];
      const result = await registeruser(data.email, data.password);
      const imageUrl = await imageUpload(imageFile);

      await updateUserProfile({
        displayName: data.name,
        photoURL: imageUrl,
      });

      await saveUserToDb({
        displayName: data.name,
        email: data.email,
        photoURL: imageUrl,
      });

      toast.success("Registration successful");
      navigate(location.state || "/");
    } catch (error) {
      toast.error(error.code || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950 py-12 px-4 transition-colors duration-300">
      <div className="card bg-white dark:bg-slate-900 w-full max-w-lg shadow-2xl rounded-[2.5rem] border border-gray-100 dark:border-slate-800 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 to-cyan-600"></div>
        <div className="p-10">
          <h1 className="text-3xl font-black text-center text-gray-800 dark:text-white mb-2 tracking-tight">Create Account</h1>
          <p className="text-center text-gray-500 dark:text-gray-400 font-bold mb-8">Join our community of book lovers</p>

          <form className="space-y-6" onSubmit={handleSubmit(handleRegistration)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest pl-1">Full Name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="w-full bg-gray-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 text-gray-800 dark:text-white focus:ring-2 focus:ring-cyan-600 transition-all font-bold"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-rose-500 text-xs font-bold pl-1">Name is required</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest pl-1">Profile Photo</label>
                <input
                  type="file"
                  {...register("photo", { required: true })}
                  className="w-full bg-gray-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-3.5 text-gray-500 dark:text-gray-400 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-black file:bg-cyan-600 file:text-white hover:file:bg-cyan-700 transition-all text-sm font-bold"
                />
                {errors.photo && <p className="text-rose-500 text-xs font-bold pl-1">Photo is required</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest pl-1">Email Address</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full bg-gray-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 text-gray-800 dark:text-white focus:ring-2 focus:ring-cyan-600 transition-all font-bold"
                placeholder="name@example.com"
              />
              {errors.email && <p className="text-rose-500 text-xs font-bold pl-1">Email is required</p>}
            </div>

            <div className="space-y-2 relative">
              <label className="text-sm font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest pl-1">Secure Password</label>
              <div className="relative">
                <input
                  type={toggle ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                  })}
                  className="w-full bg-gray-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 text-gray-800 dark:text-white focus:ring-2 focus:ring-cyan-600 transition-all font-bold"
                  placeholder="••••••••"
                />
                <span className="absolute inset-y-0 right-0 pr-6 flex items-center cursor-pointer text-gray-400 hover:text-cyan-600 transition-colors" onClick={handleToggle}>
                  {toggle ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </span>
              </div>
              {errors.password && (
                <p className="text-rose-500 text-xs font-bold pl-1">
                  {errors.password.type === "required" && "Password is required"}
                  {errors.password.type === "minLength" && "Min 6 characters required"}
                  {errors.password.type === "pattern" && "Use Uppercase, Lowercase, Number & Special Char"}
                </p>
              )}
            </div>

            <button className="w-full py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-cyan-600/20 active:scale-95 uppercase tracking-widest text-sm mt-4">
              Create New Account
            </button>

            <p className="text-center text-sm font-bold text-gray-500 dark:text-gray-400 mt-6">
              Already have an account?{" "}
              <Link state={location.state} className="text-cyan-600 hover:underline" to="/auth/login">
                Login
              </Link>
            </p>
          </form>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100 dark:border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-[0.3em] font-black text-gray-400 bg-white dark:bg-slate-900 px-4">
              Or Register With
            </div>
          </div>

          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;