import { useState } from "react";
import UseAxiosSecure from "../../../components/Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Loading from "../../../Pages/Loading";
import { FaUser } from "react-icons/fa6";
import { IoIosPhotos } from "react-icons/io";
import { updateProfile } from "firebase/auth"; 
import UseAuth from "../../Hooks/UseAuth";
import { imageUpload } from "../../../utilites";

const Profile = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const [isProfile, setIsProfile] = useState(false);

  const {
    data: userInfo = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user-info", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/${user.email}`);
      return data;
    },
  });

  const { register, handleSubmit, reset } = useForm();

  const handleProfileUpdate = async (data) => {
    try {
      Swal.fire({
        title: "Updating...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      let imageURL = userInfo.image; 

      //  Upload new image if selected
      if (data.photo && data.photo.length > 0) {
        imageURL = await  imageUpload(data.photo[0]);
      }

      // 🔥 Update Firebase profile
      await updateProfile(user, {
        displayName: data.name,
        photoURL: imageURL,
      });

      // 🔥 Update user info
      const updateData = {
        name: data.name,
        image: imageURL,
      };

      const res = await axiosSecure.patch(
        `/users/${userInfo._id}`,
        updateData
      );

      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Profile Updated!",
          confirmButtonColor: "#16a34a",
        });

        refetch();
        reset();
        setIsProfile(false);
      } else {
        Swal.fire({
          icon: "info",
          title: "No Changes Made",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
      });
    }
  };

  if (isLoading) return <Loading />;

  const { name, email, image, create_date, last_loggedIn, role } = userInfo;

  return (
    <>
      {/* Profile Card */}
      <div className="max-w-lg mx-auto mt-10 p-6 bg-purple-50 shadow rounded-lg">
        <div className="flex flex-col items-center text-center">
          <img
            src={image}
            alt="Profile"
            className="w-28 h-28 rounded-full border shadow"
          />

          <span className="mt-2 px-3 py-1 bg-gray-200 rounded-full font-semibold">
            {role}
          </span>

          <h2 className="text-2xl font-semibold mt-3">{name}</h2>
          <p className="text-gray-600">{email}</p>

          <div className="mt-4 w-full text-left text-sm space-y-1">
            <p>
              <b>Created:</b>{" "}
              {new Date(create_date).toLocaleString()}
            </p>
            <p>
              <b>Last Login:</b>{" "}
              {new Date(last_loggedIn).toLocaleString()}
            </p>
          </div>

          <button
            onClick={() => setIsProfile(true)}
            className={`btn w-full mt-4 ${
              isProfile ? "hidden" : "block"
            }`}
          >
            Update Profile
          </button>
        </div>
      </div>

      {/* Update Form */}
      {isProfile && (
        <div className="max-w-lg mx-auto mt-8 border p-4 rounded-md">
          <form onSubmit={handleSubmit(handleProfileUpdate)}>
            <label className="font-semibold">Full Name</label>
            <div className="flex items-center border p-2 rounded">
              <FaUser className="mr-2" />
              <input
                {...register("name")}
                defaultValue={name}
                className="w-full outline-none"
              />
            </div>

            <label className="font-semibold mt-3 block">
              Profile Photo
            </label>
            <div className="flex items-center border p-2 rounded">
              <IoIosPhotos className="mr-2" />
              <input
                {...register("photo")}
                type="file"
                className="w-full"
              />
            </div>

            <button className="btn w-full mt-4">
              Save Changes
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Profile;
