import { useContext } from "react";
import { RES_LOGO } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  console.log(resData);

  const { name, cuisines, avgRating, sla } = resData?.info;

  const { loggedUserInfo } = useContext(UserContext); //user from the context

  return (
    <div
      data-testid="resCards"
      className="res-card m-4 w-[220px] h-[400px] rounded-lg bg-purple-100 hover:bg-purple-700"
    >
      <img
        className="res-logo w-[100%] h-[40%] rounded-lg"
        src={RES_LOGO + resData.info.cloudinaryImageId}
      />
      <div className="res-desc m-2">
        <h1 className="my-4">
          <center>
            {" "}
            <em> {name}</em>
          </center>
        </h1>
        <center>
          <h4 className="my-1">{cuisines.join(" ")}</h4>
          <h4 className="my-1">{avgRating} stars</h4>
          <h4 className="my-1">{resData.info.costForTwo} </h4>
          <h4 className="my-1">{sla.deliveryTime} minutes</h4>
          <h4 className="my-1">User: {loggedUserInfo}</h4>
        </center>
      </div>
    </div>
  );
};

//higher order component is a function which take component as input enhances it and then returns an enhanced component (withPromotedRestaurant)
export const withPromotedRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label
          className="mx-4 text-white absolute rounded-md bg-gray-400 text-xs"
          style={{ zIndex: 1 }}
        >
          {props.resData.info.aggregatedDiscountInfoV3.header +
            " " +
            props.resData.info.aggregatedDiscountInfoV3.subHeader}
        </label>

        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
