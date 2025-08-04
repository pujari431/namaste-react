import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo.png";

//React Element is object initially but when we render this to DOM this is become HTML element.

// First Header component we are designing
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
// Here we are making a style component that can be used as inline CSS.
const stylecard = {
  backgroundColor: "#f0f0f0",
};
// This data I have got from Swiggy API
const resData = [
  {
    info: {
      id: "151656",
      name: "Dev International",
      cloudinaryImageId: "enj3srsnhbltbom2ovvh",
      locality: "khajri road",
      areaName: "Mohan Nagar",
      costForTwo: "₹100 for two",
      cuisines: ["Chinese", "Fast Food", "Beverages"],
      avgRating: 4.3,
      parentId: "71556",
      avgRatingString: "4.3",
      totalRatingsString: "552",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 13.6,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "13.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "151515",
      name: "Gupta Bhojnalay",
      cloudinaryImageId: "jo9pdipf4elcuch8g55q",
      locality: "fulwara chowk",
      areaName: "Chhindwara Locality",
      costForTwo: "₹200 for two",
      cuisines: ["Fast Food", "Indian", "Beverages"],
      avgRating: 4.7,
      veg: true,
      parentId: "91635",
      avgRatingString: "4.7",
      totalRatingsString: "451",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 11.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "11.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "234875",
      name: "Adil Hotel",
      cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
      locality: "Rautha Wada",
      areaName: "Chhindwara Locality",
      costForTwo: "₹150 for two",
      cuisines: ["Biryani", "Tandoor"],
      avgRating: 4.4,
      parentId: "27123",
      avgRatingString: "4.4",
      totalRatingsString: "1.3K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 11.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "11.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "658210",
      name: "The Fusion Lounge",
      cloudinaryImageId: "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
      locality: "Triloki nagar",
      areaName: "Railway Station",
      costForTwo: "₹300 for two",
      cuisines: [
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts",
      ],
      avgRating: 4.1,
      parentId: "395453",
      avgRatingString: "4.1",
      totalRatingsString: "355",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 11.9,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "11.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "522144",
      name: "Blue Chilli Restaurant",
      cloudinaryImageId: "je6qlse8csxgcfpuoybe",
      locality: "Ambedkar Nagar",
      areaName: "Prasia Road",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian", "Indian", "Fast Food"],
      avgRating: 4.1,
      veg: true,
      parentId: "311804",
      avgRatingString: "4.1",
      totalRatingsString: "226",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 10.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "10.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "625927",
      name: "Kathi Junction",
      cloudinaryImageId: "nigqvxgzvyxtfjuqasgg",
      locality: "Bunglow Madhuvan Colony",
      areaName: "Prasia Road",
      costForTwo: "₹200 for two",
      cuisines: ["rolls", "Burgers", "Pizzas", "Fast Food"],
      avgRating: 4.3,
      parentId: "1935",
      avgRatingString: "4.3",
      totalRatingsString: "383",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 12.2,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "12.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "184424",
      name: "Sab Ghar Tak Foods",
      cloudinaryImageId: "ryzswg44bt7thqzkuaj4",
      locality: "Sanchar Colony",
      areaName: "Parsia Road",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts",
      ],
      avgRating: 4.1,
      parentId: "173932",
      avgRatingString: "4.1",
      totalRatingsString: "617",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 14.1,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "14.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "912754",
      name: "Urban Cafe",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/21/dbe91f1f-b400-4f4b-a78d-c6b99bdc61c5_912754.JPG",
      locality: "SOUTH CIVIL LINE",
      areaName: "Chhindwara City",
      costForTwo: "₹300 for two",
      cuisines: ["Snacks", "Pizzas", "Pastas", "Fast Food", "Burgers", "Cafe"],
      avgRating: 3.9,
      veg: true,
      parentId: "1330",
      avgRatingString: "3.9",
      totalRatingsString: "14",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 12.6,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "12.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "830418",
      name: "Indian Coffee House",
      cloudinaryImageId: "2469fa88ee9b0b5d1366ba88f2a7fa7f",
      locality: "Chhindwara City",
      areaName: "Khajri Chowk",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "Chinese", "Fast Food", "Beverages"],
      avgRating: 4.4,
      veg: true,
      parentId: "106448",
      avgRatingString: "4.4",
      totalRatingsString: "231",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 13.1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "13.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "150591",
      name: "Satkar Restaurant",
      cloudinaryImageId: "rvxp5xbniat84r6efku2",
      locality: "Sinchai Colony",
      areaName: "Satkar Chowk",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian", "Indian", "Salads", "Desserts"],
      avgRating: 4.4,
      veg: true,
      parentId: "21553",
      avgRatingString: "4.4",
      totalRatingsString: "3.0K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 13.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "13.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "151649",
      name: "Hotel Sai Nath & Sai Restaurant",
      cloudinaryImageId: "vkhcohhmqfczycw9vsar",
      locality: "railway station",
      areaName: "Chhindwara Locality",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts",
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "101802",
      avgRatingString: "4.3",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 11.3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "11.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "618037",
      name: "Jai Ganesh Bhojnalaya",
      cloudinaryImageId: "yzgqriufpzmloogcn2vl",
      locality: "Railway Colony",
      areaName: "Bus stand",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Indian", "Chinese"],
      avgRating: 4.1,
      veg: true,
      parentId: "368432",
      avgRatingString: "4.1",
      totalRatingsString: "434",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 12.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "12.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "151518",
      name: "Bakery World",
      cloudinaryImageId: "mt2aggiscfl3yviatwng",
      locality: "Parasia Road",
      areaName: "Parasia Road",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
      avgRating: 4.3,
      veg: true,
      parentId: "40363",
      avgRatingString: "4.3",
      totalRatingsString: "285",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 14.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "14.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "1003414",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
      locality: "Chhindwara",
      areaName: "Parasia Road",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "164",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 13.1,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "13.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "951058",
      name: "The Burger House",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/31/fa2b070a-7908-4ac7-b66f-f63633284c0d_951058.jpg",
      locality: "Chhindwara City",
      areaName: "Chhindwara City",
      costForTwo: "₹250 for two",
      cuisines: ["Beverages", "Fast Food", "Burgers"],
      avgRating: 3.7,
      veg: true,
      parentId: "16588",
      avgRatingString: "3.7",
      totalRatingsString: "3",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 13.2,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "13.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
];

//Here we are going to plan RestaurantCard component
// Here we have used props.
const RestaurantCard = ({ resData }) => {
  if (!resData || !resData.info) return null;

  // Here we have done optional chaining
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData.info;

  const imageURL = cloudinaryImageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`
    : "https://via.placeholder.com/508x320?text=No+Image"; // fallback image

  return (
    <div className="res-card" style={stylecard}>
      <img className="res-logo" alt="res-logo" src={imageURL} />
      <h4>Hotel Name : {name}</h4>
      <h5>Cuisines : {cuisines.join(", ")}</h5>
      <h5>Average Rating : {avgRating}</h5>
      <h5>Estimated Delivery Time : {sla?.deliveryTime} minutes</h5>
    </div>
  );
};

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

// This is our Main App Layout Component
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
