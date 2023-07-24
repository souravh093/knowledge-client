import React, { useContext, useState } from "react";
import Title from "../../components/Title";
import Container from "../../components/Container/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import EditModal from "../../components/Modal/EditModal";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [editModal, setEditModal] = useState(false);
  const [editData, setEditData] = useState({});

  const closeEditModal = () => {
    setEditModal(false);
  };
  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await axios(`http://localhost:5000/profile/${user?.email}`);
      return res.data;
    },
  });

  return (
    <Container>
      <div className="py-8 px-4 sm:px-6 lg:px-8 h-[calc(100vh-280px)]">
        <Title title={"Profile"} />
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-4xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-full w-full object-cover md:w-96"
                src={data?.profileImg || user?.photoURL}
                alt="User"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Name
              </div>
              <div className="font-bold text-xl mb-2">
                {data?.candidateName || user?.displayName}
              </div>

              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Email
              </div>
              <div className="text-gray-600 mb-4">
                {data?.candidateEmail || user?.email}
              </div>

              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {data?.college_name}
              </div>
              <div className="text-gray-600 mb-4">{data?.address}</div>

              <div className="tracking-wide text-sm font-semibold">
                Data of Birth: {data?.dateOfBirth}
              </div>

              <button
                onClick={() => {
                  setEditModal(true);
                  setEditData(data);
                }}
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      <EditModal
        isOpen={editModal}
        email={user?.email}
        editData={editData}
        closeModal={closeEditModal}
      />
    </Container>
  );
};

export default Profile;
