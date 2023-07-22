import React from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";


const Register = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission here
  };

  return (
    <div className="grid grid-cols-2">
      <div>
        <img className="h-screen object-cover" src="https://i.ibb.co/7S4Z6m5/people-6027028-1280.jpg" alt="" />
      </div>

      <div className="mt-8 p-6 border border-gray-300 rounded">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              )}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              )}
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
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message:
                    "Password must contain at least 8 characters, one letter, one number, and one special character",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  id="password"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-1">
              Confirm Password
            </label>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: "Confirm Password is required",
                validate: (value) =>
                  value === control.getValues("password")
                    ? undefined
                    : "Passwords do not match",
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  id="confirmPassword"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              )}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* University */}
          <div className="mb-4">
            <label htmlFor="university" className="block mb-1">
              University
            </label>
            <Controller
              name="university"
              control={control}
              rules={{ required: "University is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="university"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              )}
            />
            {errors.university && (
              <p className="text-red-500">{errors.university.message}</p>
            )}
          </div>

          {/* Address */}
          <div className="mb-4">
            <label htmlFor="address" className="block mb-1">
              Address
            </label>
            <Controller
              name="address"
              control={control}
              rules={{ required: "Address is required" }}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="address"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              )}
            />
            {errors.address && (
              <p className="text-red-500">{errors.address.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>

        {/* Social Media Signup Buttons */}
        <div className="mt-4">
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mr-2">
            Sign Up with Google
          </button>
          <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
            Sign Up with GitHub
          </button>
        </div>

        {/* Reset Password Button */}
        <div className="mt-4">
          <button className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400">
            Reset Password
          </button>
        </div>

        {/* Link to Login Page */}
        <div className="mt-4">
          <a
            href="/login" // Replace with the link to your login page
            className="text-blue-500 hover:underline"
          >
            Already have an account? Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
