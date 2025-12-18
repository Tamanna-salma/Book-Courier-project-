import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import UseAuth from "../../components/Hooks/UseAuth";
import SocialLogin from "../SocialLogin";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
  const [toggle, setToggle] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const { registeruser, updateUserProfile } = UseAuth();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleRegistration = async (data) => {
    try {
      const imageFile = data.photo[0];

      //  Firebase Register
      const result = await registeruser(data.email, data.password);
      console.log("User created:", result.user);

      //  Upload image to imgbb
      const imageUrl = await imageUpload(imageFile);

      // Update Firebase profile
      await updateUserProfile({
        displayName: data.name,
        photoURL: imageUrl,
      });

      toast.success("Registration successful ");
      navigate(location.state || "/");
    } catch (error) {
      console.error(error);
      toast.error(error.code || "Registration failed");
    }
  };

  return (
    <div className="card-body flex justify-center items-center py-8 lg:py-12">
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl px-4">
          <h1 className="font-semibold text-lg text-center mt-4">
            Register your account
          </h1>

          <div className="card-body">
            <fieldset className="fieldset">

              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input input-bordered"
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">Name is required</p>
              )}

              {/* Photo */}
              <label className="label">Photo</label>
              <input
                type="file"
                {...register("photo", { required: true })}
                className="file-input file-input-bordered"
              />
              {errors.photo && (
                <p className="text-red-500 text-sm">Photo is required</p>
              )}

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input input-bordered"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">Email is required</p>
              )}

              {/* Password */}
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={toggle ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                  })}
                  className="input input-bordered"
                  placeholder="Password"
                />
                <span
                  className="absolute right-4 bottom-3 cursor-pointer"
                  onClick={handleToggle}
                >
                  {toggle ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-sm">
                  Password must be at least 6 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500 text-sm">
                  Must include uppercase, lowercase, number & special character
                </p>
              )}

              <button className="btn btn-neutral mt-4">
                Register
              </button>
            </fieldset>

            <p className="text-sm mt-2">
              Already have an account?{" "}
              <Link
                state={location.state}
                className="text-blue-500 underline"
                to="/auth/login"
              >
                Login
              </Link>
            </p>
          </div>

          <SocialLogin />
        </div>
      </form>
    </div>
  );
};

export default Register;
