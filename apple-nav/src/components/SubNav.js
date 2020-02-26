import React from "react";
import { 
  Route, 
  Link,
  useRouteMatch,
  useParams 
} from "react-router-dom";
import SubCategory from './SubCategory'

import data from '../data'

const SubNav = (props) => {
  const {category} = useParams();
  const {url, path} = useRouteMatch();
  const array = data[category]

  const kababCase = (string) => {
    const wordArr = string.split(' ').map(item => item.toLowerCase())
    const kabab = wordArr.join('-')
    return kabab
  }

  return (
    <div className="sub-wrapper">
      {array.map(item => {
        const subCategory = kababCase(item)
        return (
          <Link 
            to={`/${subCategory}`}
            style={{ 
              display: "inline-block",
              padding: "3% 7%",
            }}>
            {item}
          </Link>
        )
      })}
      <Route path={`/:subCategory`}>
        <SubCategory />
      </Route>
    </div>
  )
}

export default SubNav;