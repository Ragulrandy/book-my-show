//transfom component into another components
//adding additional functionalities

import React from "react";
import { Route } from "react-router-dom";

//layouts
import MovieLayout from "../layouts/Movie.layout";

const MovieHOC = ({ component: Component , ...rest }) =>{
  //components
  //props -> path exact
  return (
    <>
    <Route
    {...rest}

    component = {(props) => (
      <MovieLayout>
       <Component {...props} />
      </MovieLayout>
    )

    }
     />
    </>
  )
};

export default MovieHOC;
