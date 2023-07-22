import React from "react";
import { useLoaderData } from "react-router-dom";

const CollegeDetails = () => {
  const college = useLoaderData();

  const {
    college_name,
    college_image,
    admission_dates,
    events,
    research_history,
    sports,
    admission_process,
    events_details,
    research_works,
    sports_categories,
  } = college;
  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <img src={college_image} alt={college_name} className="h-96 w-full object-cover rounded-md shadow-md" />
        <h1 className="text-3xl font-semibold mt-4">{college_name}</h1>
        <p className="text-gray-600 mt-2">
          Admission Dates: {admission_dates.start_date} to {admission_dates.end_date}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Events</h2>
          <ul className="list-disc list-inside">
            {events.map((event) => (
              <li key={event} className="mb-2">
                {event}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Research History</h2>
          <p className="text-gray-600">{research_history}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Sports</h2>
          <ul className="list-disc list-inside">
            {sports.map((sport) => (
              <li key={sport} className="mb-2">
                {sport}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Admission Process</h2>
          <p className="text-gray-600">{admission_process}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Events Details</h2>
          <ul>
            {Object.entries(events_details).map(([eventName, eventDate]) => (
              <li key={eventName} className="mb-2">
                <span className="font-semibold">{eventName}:</span> {eventDate}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Research Works</h2>
          <p className="text-gray-600">{research_works}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Sports Categories</h2>
          <ul>
            {Object.entries(sports_categories).map(([sportName, sportDescription]) => (
              <li key={sportName} className="mb-2">
                <span className="font-semibold">{sportName}:</span> {sportDescription}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
