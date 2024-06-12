import RestaurantCard, { withPromotedRestaurant } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  //a higher-order component is a function that takes a component and returns a new component.
  const PromotedRestaurant = withPromotedRestaurant(RestaurantCard);

  //getting context from useContext
  const { loggedUserInfo, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6713752&lng=77.2692261&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //checking if the internet is working
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <center>
        Internet connection is not working , kindly connect to the Internet
      </center>
    );
  }

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex mx-5">
        <div className="search m-5">
          <input
            type="text"
            data-testid="search-input"
            className="search-text mx-5  bg-slate-600 rounded-md"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn w-40 bg-slate-600 rounded-md"
            onClick={() => {
              const searchedList = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(searchedList);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-5  bg-slate-600 rounded-md">
          <button
            className="topResBtn"
            onClick={() => {
              let filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredList(filteredList);
            }}
          >
            Top restaurant
          </button>
        </div>

        <div className="m-5 ">
          <label>Username: </label>
          <input
            className=" bg-slate-600 rounded-md border-black border-2 "
            type="text"
            value={loggedUserInfo}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredList?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* write the logic that if the restaurant is promoted than withPromotedRestaurant card will be loaded else simple Restaurant card will be loaded */}
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <PromotedRestaurant resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
