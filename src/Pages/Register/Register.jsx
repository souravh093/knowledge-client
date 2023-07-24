import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import { saveUser } from "../../api/auth";
import { useLocation, useNavigate } from "react-router-dom";

const imageToken = import.meta.env.VITE_UPLOAD_TOKEN;

const Register = () => {
  const { createUser, updateUser, googleLoginUser, githubLoginUser } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const imageUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    axios.post(imageUrl, formData).then((dataImage) => {
      createUser(data.email, data.password).then((result) => {
        updateUser(data.name, dataImage.data.data.display_url).then(() => {
          saveUser(result.user, dataImage.data.data.display_url);
          navigate(from, { replace: true });
          console.log("done");
        });
      });
    });

    console.log(data);
  };

  const handleGoogleUser = () => {
    googleLoginUser().then((result) => {
      saveUser(result.user, result.user.photoURL);
      navigate(from, { replace: true });
      console.log(result.user);
    });
  };

  const handleGithubUser = () => {
    githubLoginUser().then((result) => {
      saveUser(result.user, result.user.photoURL);
      navigate(from, { replace: true });
      console.log(result.user);
    });
  };

  return (
    <div className="grid lg:grid-cols-2">
      <div className="hidden lg:block">
        <img
          className="h-[calc(100vh-97px)] object-cover"
          src="https://i.ibb.co/7S4Z6m5/people-6027028-1280.jpg"
          alt=""
        />
      </div>

      <div className="mx-20 mt-8 p-6 border border-gray-300 rounded">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message:
                    "Password must contain at least 8 characters, one letter, one number, and one special character",
                },
              })}
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-1">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword", {
                required: "Confirm Password is required",
              })}
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block mb-1">
              Upload Image
            </label>
            <input
              {...register("image", {
                required: "Image is required",
                validate: {
                  fileSize: (file) =>
                    file[0]?.size < 1048576 ||
                    "Image size must be less than 1MB",
                  fileType: (file) =>
                    /jpeg|png|gif/.test(file[0]?.type) ||
                    "Unsupported image format (jpeg/png/gif only)",
                },
              })}
              type="file"
              id="image"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Register
            </button>
          </div>
        </form>

        <div className="mt-4 flex flex-col lg:flex-row gap-3">
          <button
            onClick={handleGoogleUser}
            className="border flex gap-3 items-center py-2 px-4 rounded mr-2"
          >
            <FcGoogle /> Sign Up with Google
          </button>
          <button
            onClick={handleGithubUser}
            className="bg-black flex gap-3 items-center text-white py-2 px-4 rounded hover:bg-gray-800"
          >
            <FaGithub /> Sign Up with GitHub
          </button>
        </div>

        <div className="mt-4">
          <a href="/login" className="text-blue-500 hover:underline">
            Already have an account? Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
