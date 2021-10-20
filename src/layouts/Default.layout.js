import React from "react";

//components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarosal.component.js";

const DefaultLayout = (props) => {
  return (
    <>
    <Navbar />
    <HeroCarousal />
    {props.children}
    </>
  );
};

export default DefaultLayout;
