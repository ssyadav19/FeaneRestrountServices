import React from "react";
// import Carousel from "../components/Carousel";
import BookTable from "./BookTable";
import AboutPage from "./AboutPage";
import Offers from "./Offers";
import Menu from "./Menu";

const Homepage = () => {
  return (
    <>
      {/* <Carousel /> */}
      <Offers />
      <Menu />
      <AboutPage />
      <BookTable />
    </>
  );
};

export default Homepage;
