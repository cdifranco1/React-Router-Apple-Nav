import React from "react";
import { Route, Link } from "react-router-dom";
import data from "../data";


const MainNav = (props) => {
  console.log(data)
  return (
    <nav>
      {Object.keys(data).map((category) => {
        return (
          <Link to={`/${category}`}
            style={{ 
              display: "inline-block",
              padding: '2% 5%'
              }}>
            {category}
          </Link>
        )
      })}
    </nav>
  )
}


export default MainNav;