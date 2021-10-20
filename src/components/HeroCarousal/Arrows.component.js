import React from "react";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

export const PrevArrow = (props) => {
  return (
    <>
    <div
    style={{
    ...props.style,
    fontSize: "40px", display: 'block', left:"-3px", top: "160px",zIndex:"15", height:"40px", width:"40px", opacity:"0.55", color:"whitesmoke", backgroundColor:"black", position:"absolute", borderRadius: "4px", paddingLeft:"4px"
    }}
    onClick={props.onClick}>
    <span className="icon IoIosArrowBack"><IoIosArrowBack/></span>
    </div>
    </>
  );
};

export const NextArrow = (props) => {
  return (
    <>
    <div
    style={{
    ...props.style,
    fontSize: "40px", display: 'block', right:"-2px", top: "160px",zIndex:"15", height:"40px", width:"40px", opacity:"0.55", color:"whitesmoke", backgroundColor:"black", position:"absolute", borderRadius: "4px", paddingRight:"5px"
    }}
    onClick={props.onClick}>
    <span className="icon IoIosArrowBack"><IoIosArrowForward/></span>
    </div>
    </>
  );
};
