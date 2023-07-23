import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";

const ApplyModal = ({ closeModal, isOpen, id }) => {
  //   const handleFeedback = (event) => {
  //     event.preventDefault();
  //     const feedback = event.target.feedback.value;
  //     fetch(`${import.meta.env.VITE_BASE_URL}/classes/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify({ feedback }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.modifiedCount) {
  //           closeModal();
  //         }
  //       });
  //   };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Perform form submission logic here
  };

  return (
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
                <div className="w-full max-w-sm">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mx-auto max-w-lg p-6"
                  >
                    {/* Candidate Name */}
                    <div className="mb-4">
                      <label
                        htmlFor="candidateName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Candidate Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="candidateName"
                          name="candidateName"
                          placeholder="Enter candidate name"
                          {...register("candidateName", {
                            required: "Candidate name is required",
                          })}
                          className="input-field px-3 py-2 border block w-full"
                        />
                        {errors.candidateName && (
                          <span className="text-red-500">
                            {errors.candidateName.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="mb-4">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Subject
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          placeholder="Enter subject"
                          {...register("subject", {
                            required: "Subject is required",
                          })}
                          className="input-field px-3 py-2 border block w-full"
                        />
                        {errors.subject && (
                          <span className="text-red-500">
                            {errors.subject.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Candidate Email */}
                    <div className="mb-4">
                      <label
                        htmlFor="candidateEmail"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Candidate Email
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          id="candidateEmail"
                          name="candidateEmail"
                          placeholder="Enter candidate email"
                          {...register("candidateEmail", {
                            required: "Candidate email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          className="input-field px-3 py-2 border block w-full"
                        />
                        {errors.candidateEmail && (
                          <span className="text-red-500">
                            {errors.candidateEmail.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Candidate Phone Number */}
                    <div className="mb-4">
                      <label
                        htmlFor="candidatePhone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Candidate Phone Number
                      </label>
                      <div className="mt-1">
                        <input
                          type="tel"
                          id="candidatePhone"
                          name="candidatePhone"
                          placeholder="Enter candidate phone number"
                          {...register("candidatePhone", {
                            required: "Candidate phone number is required",
                          })}
                          className="input-field px-3 py-2 border block w-full"
                        />
                        {errors.candidatePhone && (
                          <span className="text-red-500">
                            {errors.candidatePhone.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Address */}
                    <div className="mb-4">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="address"
                          name="address"
                          placeholder="Enter address"
                          {...register("address", {
                            required: "Address is required",
                          })}
                          className="input-field px-3 py-2 border block w-full" 
                        />
                        {errors.address && (
                          <span className="text-red-500">
                            {errors.address.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Date of Birth */}
                    <div className="mb-4">
                      <label
                        htmlFor="dateOfBirth"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date of Birth
                      </label>
                      <div className="mt-1">
                        <input
                          type="date"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          {...register("dateOfBirth", {
                            required: "Date of Birth is required",
                          })}
                          className="input-field px-3 py-2 border block w-full"
                        />
                        {errors.dateOfBirth && (
                          <span className="text-red-500">
                            {errors.dateOfBirth.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Image Field */}
                    <div className="mb-4">
                      <label
                        htmlFor="image"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Image
                      </label>
                      <div className="mt-1">
                        <input
                          type="file"
                          id="image"
                          name="image"
                          {...register("image", {
                            required: "Image is required",
                          })}
                          className="input-field px-3 py-2 border block w-full"
                        />
                        {errors.image && (
                          <span className="text-red-500">
                            {errors.image.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ApplyModal;
