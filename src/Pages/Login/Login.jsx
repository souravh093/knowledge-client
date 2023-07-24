import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { saveUser } from "../../api/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { googleLoginUser, githubLoginUser, loginUser, resetPassword } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const emailRef = useRef();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data.email, data.password).then((result) => {
      console.log(result.user);
      navigate(from, { replace: true });
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
      navigate(from, { replace: true });
      console.log(result.user);
    });
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    resetPassword(email).then(() => {
      alert("Please Check your Email");
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
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
              })}
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Login
          </button>
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

        {/* Reset Password Button */}
        <div className="mt-4">
          <button
            onClick={handleResetPassword}
            className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400"
          >
            Reset Password
          </button>
        </div>

        {/* Link to Register Page */}
        <div className="mt-4">
          <Link
            to="/register" // Replace with the link to your register page
            className="text-blue-500 hover:underline"
          >
            Don not have an account? Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
