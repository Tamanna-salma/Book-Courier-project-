import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import UseAuth from '../../components/Hooks/UseAuth';
import axios from 'axios';




const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  console.log('in register', location);
  const { registeruser, updateUserProfile } = UseAuth();

  const handleRegistion = (data) => {
    // console.log('after register', data.photo[0]);
    const profileImg = data.photo[0];

    registeruser(data.email, data.password)
      .then(result => {
        console.log(result.user);

        //update user profile
        const formData = new FormData();
        formData.append('image', profileImg);
        // 2. send the photo to store and get the ul
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`

        axios.post(image_API_URL, formData)
          .then(res => {
            console.log('after image upload', res.data.data.url)

            // update user profile to firebase
            const userProfile = {
              displayName: data.name,
              photoURL: res.data.data.url
            } 

            updateUserProfile(userProfile)
              .then(() => {
                console.log('user profile updated done.')
                navigate(location.state || '/');
              })
              .catch(error => console.log(error))
          })

      })
      .catch(error => {
        console.log(error);
      })

  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistion)}>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">

              {/* name** */}
              <label className="label">Name</label>
              <input type="text"{...register("name", { required: true })} className="input" placeholder="Name" />
              {errors.name?.type === 'required' && <p className='text-red-500'>Name is required.</p>}

              {/* photo** */}
              <label className="label">Photo</label>
              <input type="file"{...register("photo", { required: true })} className="file-input" placeholder="photo" />
              {errors.name?.type === 'required' && <p className='text-red-500'>Photo is required.</p>}

              {/* email* */}
              <label className="label">Email</label>
              <input type="email"{...register("email", { required: true })} className="input" placeholder="Email" />
              {errors.name?.type === 'required' && <p className='text-red-500'>Email is required.</p>}

              {/* password */}
              <label className="label">Password</label>
              <input type="password"{...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/

              })} className="input" placeholder="Password" />

              {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters or longer</p>
              }

              {
                errors.password?.type === 'pattern' && <p className='text-red-500'>Password must have at least one uppercase, at least one lowercase, at least one number, and at least one special characters</p>
              }

              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>

            <p>Already have an account <Link
              state={location.state}
              className='text-blue-400 underline'
              to="/login">Login</Link></p>

          </div>
          {/* <SocialLogin></SocialLogin> */}
        </div>

      </form>

    </div>
  )
}

export default Register;