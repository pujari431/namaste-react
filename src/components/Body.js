import RestaurantCard from "./RestaurantCard";
import resData from "../utils/resmock_data";
import { useState } from "react";

// Here we have imported mock res data from resmock_data file from utils
// Here we are going to build body component
const Body = () => {
  //State variable
  const arr = useState(resData);
  const [resList, setresData] = arr;

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Here we have to write filter code bcoz we are going to show
            // only top rated restaurants
            const filteredList = resData.filter(
              (res) => res.info.avgRating > 4
            );
            setresData(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {/* Here Resto-card many will be there so for that we will build seperate component */}
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
