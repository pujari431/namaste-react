import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  // Here when this component render we will make an API Call here.
  // Here we are using dependency array because we don't want to call API
  // for every render of the component.
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=150591&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  // Here if resInfo is empty show shimmer UI
  // Else return the UI. We have used ternary operator
  if (resInfo === null) return <Shimmer />;
  //destructuring the code
  // above step we have checked that resInfo has some data, if it has some data
  // then only we will destructure it.
  const {
    name: restaurantName,
    city,
    cloudinaryImageId,
    cuisines,
    costForTwoMessage,
  } = resInfo.cards[2].card.card.info;
  // This is for menu

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || [];

  console.log(itemCards);

  return (
    <div>
      <h1>{restaurantName}</h1>
      <h4>{city}</h4>
      <h4>{cuisines.join(" ,")}</h4>
      <h4>{costForTwoMessage}</h4>
      {/* <h1>Menu</h1>
      <h5>{itemCards[0].card.info.menuItemName}</h5> */}
      <p></p>
    </div>
  );
};
export default RestaurantMenu;
