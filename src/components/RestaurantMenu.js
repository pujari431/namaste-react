import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  // Here when this component render we will make an API Call here.
  // Here we are using dependency array because we don't want to call API
  // for every render of the component.
  // Here we are going to use Params because we are going to make resID as dynamic
  const { restaurantId } = useParams();
  console.log(restaurantId);

  useEffect(() => {
    fetchMenu();
  }, [restaurantId]);
  //Here we have added resId as Dependency arrays whenever resID changes use Effect
  // should fetch the data means API call should happen
  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API_URL + restaurantId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json.data);
  };
  console.log(resInfo);
  // Here if resInfo is empty show shimmer UI
  // Else return the UI. We have used ternary operator
  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;
  if (!restaurantInfo) {
    return <Shimmer />;
  }
  //destructuring the code
  // above step we have checked that resInfo has some data, if it has some data
  // then only we will destructure it.
  const {
    name: restaurantName,
    city,
    cloudinaryImageId,
    cuisines,
    costForTwoMessage,
  } = restaurantInfo;

  // This is for menu
  // const itemCards =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  //     ?.itemCards || [];

  // console.log(itemCards);

  const menuCards =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const menuSection = menuCards.find((card) => card?.card?.card?.itemCards);
  const itemCards = menuSection ? menuSection.card.card.itemCards : [];

  console.log(itemCards);

  return (
    <div>
      <h1>{restaurantName}</h1>
      <h4>{city}</h4>
      <h4>{cuisines.join(" ,")}</h4>
      <h4>{costForTwoMessage}</h4>
      <h1>Menu</h1>
      {/* Here if we check we for each item we are returning the list of 
      item.card.info.name */}
      {itemCards.map((item) => (
        <li key={item.card.info.id}>
          {item.card.info.name}-{" ₹" + item.card.info.price / 100}
        </li>
      ))}

      <p></p>
    </div>
  );
};
export default RestaurantMenu;
