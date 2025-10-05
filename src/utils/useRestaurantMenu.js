import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";
const useRestaurantMenu = (restaurantId) => {
  const [resInfo, setResInfo] = useState(null);
  // Here we will fetch the data exactly as same how we have done in component.

  useEffect(() => {
    fetchData();
  }, [restaurantId]);
  const fetchData = async () => {
    const data = await fetch(MENU_API_URL + restaurantId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
