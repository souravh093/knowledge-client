import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import React from "react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const EditModal = ({ isOpen, closeModal, editData, email }) => {
  console.log(email, editData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .put(`https://knowledge-door-server.vercel.app/profiles/${email}`, data)
      .then((res) => {
        toast.success("Successfully updated");
        closeModal();
      });
    console.log(data); // You can perform any action with the form data here
  };
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="w-full max-w-sm mx-auto">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="w-full mx-auto"
                    >
                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block text-gray-700 font-bold mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          defaultValue={editData.candidateName}
                          className={`form-input border px-2 py-2 w-full ${
                            errors.name ? "border-red-500" : "border-gray-300"
                          }`}
                          {...register("name", {
                            required: "Name is required",
                          })}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block text-gray-700 font-bold mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          defaultValue={editData.email}
                          className={`form-input border px-2 py-2 w-full ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                          {...register("email", {
                            required: "Email is required",
                          })}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="college"
                          className="block text-gray-700 font-bold mb-2"
                        >
                          College Name
                        </label>
                        <input
                          type="text"
                          name="college"
                          id="college"
                          defaultValue={editData.college_name}
                          className={`form-input border px-2 py-2 w-full ${
                            errors.college
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          {...register("college", {
                            required: "College name is required",
                          })}
                        />
                        {errors.college && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.college.message}
                          </p>
                        )}
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="address"
                          className="block text-gray-700 font-bold mb-2"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          defaultValue={editData.address}
                          className={`form-input border px-2 py-2 w-full ${
                            errors.address
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          {...register("address", {
                            required: "Address is required",
                          })}
                        />
                        {errors.address && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.address.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Update
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default EditModal;
