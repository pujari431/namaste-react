import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// Here we have imported mock res data from resmock_data file from utils
// Here we are going to build body component
const Body = () => {
  //State variable
  const [resList, setresData] = useState([]);
  // This state variable is for search functionality feature
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  // While updataing the res data we will this method setFilteredRestaurants
  // Here we are using useEffect Hook
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    // Here data will be in form of promise,because this happens with fetch()
    const apidata = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsondata = await apidata.json();

    setresData(
      jsondata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      jsondata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );

    // Here we are using this method to call all the res data without modifying
    // the original data. We are making a copy of it.
  };

  // This is for search option
  const [searchText, setsearchText] = useState("");

  // Here loading spinner we are using to load a spinner while API
  // is getting data
  // This is also called Conditional Rendering
  // Here we are using ternary operator
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            placeholder="Search"
            type="text"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            onClick={() => {
              //Filter the restaurant cards and udpate the UI
              //searchText
              const searchList = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(searchList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Here we have to write filter code bcoz we are going to show
            // only top rated restaurants
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {/* Here Resto-card many will be there so for that we will build seperate component */}
      <div className="res-container">
        {filteredrestaurants.map((restaurant) => (
          // Here onclick of every restro element it will re-direct to it's specific page
          // with the help of this Link
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
