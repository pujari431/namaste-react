import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// Here we have imported mock res data from resmock_data file from utils
// Here we are going to build body component
const Body = () => {
  //State variable
  const [resList, setresData] = useState([]);
  // Here we are using useEffect Hook
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsondata = await data.json();
    console.log(jsondata);
    setresData(
      //Here I am going to perform optinal chaining
      jsondata.data.cards[3].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  // This is for search option
  const [searchText, setsearchText] = useState("");
  const handleSearch = () => {
    const updatedList = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setresData(updatedList);
  };

  // Here loading spinner we are using to load a spinner while API
  // is getting data
  if (resList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Here we have to write filter code bcoz we are going to show
            // only top rated restaurants
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4
            );
            setresData(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
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
