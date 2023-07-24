import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Container from "../../../components/Container/Container";
import ReviewItem from "./ReviewItem/ReviewItem";
import Title from "../../../components/Title";

const Review = () => {
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios("http://localhost:5000/reviews");
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

  console.log(reviews);
  return (
    <div className="mt-20">
      <Title title={"Reviews "} />
      <Container>
        <div className="grid grid-cols-3 gap-5">
          {reviews.map((review) => (
            <ReviewItem key={review._id} review={review} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Review;
