import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import Title from "../../components/Title";
import ApplyModal from "../../components/Modal/ApplyModal";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Admission = () => {
  const { user } = useContext(AuthContext);
  const [applyModal, setApplyModal] = useState(false);
  const [collegeData, setCollegeData] = useState({});
  const navigate = useNavigate();

  const closeApplyModal = () => {
    setApplyModal(false);
  };

  const { data: colleges = [], isLoading } = useQuery({
    queryKey: ["college"],
    queryFn: async () => {
      const res = await axios("https://knowledge-door-server.vercel.app/colleges");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <div
          className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <Title title={"Apply this college"} />
      <div className="bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Image
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Apply
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {colleges.map((college) => (
              <tr key={college._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={college.college_image}
                    alt={college.college_name}
                    className="h-16 w-16 object-cover rounded-md"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {college.college_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => {
                      setApplyModal(true);
                      setCollegeData(college)
                      !user &&
                        Swal.fire({
                          title: "Please login first",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#159A9C",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Login",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            navigate("/login");
                          }
                        });
                    }}
                    className="bg-[#159A9C] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#158d8f] focus:outline-none"
                  >
                    Apply
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {user && (
        <ApplyModal isOpen={applyModal} email={user?.email} collegeData={collegeData} closeModal={closeApplyModal} />
      )}
    </div>
  );
};

export default Admission;
