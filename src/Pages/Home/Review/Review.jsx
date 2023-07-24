import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Container from "../../../components/Container/Container";
import ReviewItem from "./ReviewItem/ReviewItem";
import Title from "../../../components/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Review = () => {
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios(
        "https://knowledge-door-server.vercel.app/reviews"
      );
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"></div>
        <Swiper
          modules={[Pagination, Autoplay]}
          loop
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <ReviewItem review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Review;
