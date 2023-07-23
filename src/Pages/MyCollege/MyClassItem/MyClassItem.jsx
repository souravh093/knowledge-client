import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React, { useState } from "react";

const MyClassItem = ({ data }) => {
  const [rating, setRating] = useState(0);
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Feedback submitted:", feedback);
  };
  return (
    <div className="px-4 py-8 border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Part - College Information */}
        <div className="md:mr-8">
          <img
            src={data.college_image}
            alt="College"
            className="w-full h-64 object-cover mb-4 rounded"
          />
          <h2 className="text-2xl font-bold mb-2">{data.college_name}</h2>
          <p className="text-sm mb-4">{data.research_history}</p>

          <h3 className="text-lg font-bold mb-2">Admission Dates:</h3>
          <p className="text-sm mb-4">
            From {data.admission_dates.start_date} to{" "}
            {data.admission_dates.end_date}
          </p>

          <div className="grid grid-cols-2">
            <div>
              <h3 className="text-lg font-bold mb-2">Events:</h3>
              <ul className="list-disc list-inside mb-4">
                {data.events.map((event) => (
                  <li key={event} className="text-sm mb-2">
                    {event}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mt-4 mb-2">Sports:</h3>
              <ul className="list-disc list-inside mb-4">
                {data.sports.map((sport) => (
                  <li key={sport} className="text-sm mb-2">
                    {sport}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="text-lg font-bold mt-4 mb-2">Research Works:</h3>
          <p className="text-sm">{data.research_works}</p>
          <h3 className="text-lg font-bold mt-4 mb-2">Admission Process:</h3>
          <p className="text-sm">{data.admission_process}</p>
        </div>

        {/* Right Part - Candidate Information */}
        <div>
          <img
            src={data.profileImg}
            alt="Candidate"
            className="w-32 h-32 rounded-full mb-4 mx-auto md:mb-0"
          />
          <div className="flex justify-center mt-5">
            <div>
              <h2 className="text-xl font-bold mb-2">
                Name: {data.candidateName}
              </h2>
              <p className="text-sm mb-2">Subject: {data.subject}</p>
              <p className="text-sm mb-4">Address: {data.address}</p>
              <p className="text-sm mb-4">Date of Birth: {data.dateOfBirth}</p>
              <p className="text-sm mb-4">Email: {data.candidateEmail}</p>
              <p className="text-sm mb-4">Phone: {data.candidatePhone}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white border rounded-lg shadow-lg p-6">
              <h1 className="text-2xl text-center font-bold mb-4">
                Rate this College:
              </h1>
              <div className="flex justify-center items-center">
                <Rating
                  style={{ maxWidth: 250 }}
                  value={rating}
                  onChange={setRating}
                />
              </div>
              <p className="text-center mt-4">Current rating: {rating}</p>
            </div>

            <form className="bg-white border rounded-lg shadow-lg p-6">
              <h1 className="text-2xl font-bold mb-4">Feedback the college</h1>
              <textarea
                className="w-full border rounded p-2 mb-4"
                rows="4"
                placeholder="Type your feedback here..."
                value={feedback}
                onChange={handleFeedbackChange}
              />
              <button
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSubmit}
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClassItem;
