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
  return (
    <div className="mt-20">
      <Container>
        <Title title={"My classes"} />
        <div>
          {applliedinfo.map((applied) => (
            <MyClassItem key={applied._id} data={applied} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MyCollege;
