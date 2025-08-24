import { CDN_URL } from "../utils/constants";

//Here we are going to plan RestaurantCard component
// Here we have used props.

const stylecard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = ({ resData }) => {
  if (!resData || !resData.info) return null;

  // Here we have done optional chaining
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData.info;

  const imageURL = CDN_URL + cloudinaryImageId;

  return (
    <div className="res-card" style={stylecard}>
      <img className="res-logo" alt="res-logo" src={imageURL} />
      <h4>{name}</h4>
      <h5>Cuisines : {cuisines.join(", ")}</h5>
      <h5>Average Rating : {avgRating}</h5>
      <h5>Estimated Delivery Time : {sla?.deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
