import React from "react";
import Container from "../../components/Container/Container";
import Search from "../../components/Search/Search";
import Colleges from "./Colleges/Colleges";
import Gallery from "./Gallery/Gallery";
import Review from "./Review/Review";

const Home = () => {
  return (
    <div>
      <Container>
        <Search />
        <Colleges />
        <Gallery />
        <Review />
      </Container>
    </div>
  );
};

export default Home;
