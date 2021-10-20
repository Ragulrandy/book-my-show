//transfom component into another components
//adding additional functionalities

import React from "react";
import { Route } from "react-router-dom";

//layouts
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ component: Component , ...rest }) =>{
  //components
  //props -> path exact
  return (
    <>
    <Route
    {...rest}

    component = {(props) => (
      <DefaultLayout>
       <Component {...props} />
      </DefaultLayout>
    )

    }
     />
    </>
  )
};

export default DefaultHOC;
