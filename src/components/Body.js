import RestaurantCard from "./RestaurantCard";
import resData from "../utils/resmock_data";

// Here we have imported mock res data from resmock_data file from utils
// Here we are going to build body component
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      {/* Here Resto-card many will be there so for that we will build seperate component */}
      <div className="res-container">
        {resData.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
