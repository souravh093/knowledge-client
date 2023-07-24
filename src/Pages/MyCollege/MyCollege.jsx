import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import Container from "../../components/Container/Container";
import Title from "../../components/Title";
import { AuthContext } from "../../Provider/AuthProvider";
import MyClassItem from "./MyClassItem/MyClassItem";

const MyCollege = () => {
  const { user } = useContext(AuthContext);
  const { data: applliedinfo = [], isLoading } = useQuery({
    queryKey: ["colleges"],
    queryFn: async () => {
      const res = await axios(`http://localhost:5000/applied/${user?.email}`);
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
    <div className="mt-20">
      <Container>
        <Title title={"My classes"} />
        <div className="flex flex-col gap-5">
          {applliedinfo.map((applied) => (
            <MyClassItem key={applied._id} data={applied} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MyCollege;
