import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Provider/AuthProvider";

const CollegeItem = ({ data }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const {
    _id,
    college_name,
    college_image,
    admission_dates,
    events,
    research_history,
    sports,
  } = data;

  const handleDetails = () => {
    if (!user) {
      Swal.fire({
        title: "Please login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#159A9C",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("hello world");
          navigate("/login");
        }
      });
    } else {
      navigate(`/collageDetails/${_id}`);
    }
  };
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <img
        src={college_image}
        alt="College Image"
        className="w-full rounded-lg mb-4 h-96 object-cover"
      />

      <h1 className="text-3xl font-semibold text-gray-800 mb-2">
        {college_name}
      </h1>

      <p className="text-lg text-gray-600 mb-2">
        Admission Dates: <span>{admission_dates.start_date}</span> to{" "}
        <span>{admission_dates.end_date}</span>
      </p>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Events</h2>
        <ul className="list-disc list-inside mt-2">
          {events.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Research History
        </h2>
        <p className="text-gray-600">{research_history}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-800">Sports</h2>
        <ul className="font-semibold text-gray-800 flex gap-3">
          {sports.map((sport, index) => (
            <li key={index}>{sport}</li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleDetails}
        className="bg-[#159A9C] my-2 w-full hover:bg-[#148b8d] transition-all text-white font-semibold py-2 px-4 rounded"
      >
        Details
      </button>
    </div>
  );
};

export default CollegeItem;
