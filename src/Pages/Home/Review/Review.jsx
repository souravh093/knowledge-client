import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Container from "../../../components/Container/Container";
import ReviewItem from "./ReviewItem/ReviewItem";

const Review = () => {
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios("http://localhost:5000/reviews");
      return res.data;
    },
  });

  console.log(reviews)
  return (
    <div>
      <Container>
        <div className="grid grid-cols-3">
          {reviews.map((review) => (
            <ReviewItem key={review._id} review={review} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Review;
