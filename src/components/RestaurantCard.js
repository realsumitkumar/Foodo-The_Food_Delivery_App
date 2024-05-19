import { RES_LOGO } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const { name, cuisines, avgRating, sla } = resData?.info

    return (
        <div className="res-card" style={{ backgroundColor: "purple" }} >
            <img className="res-logo" src={RES_LOGO + resData.info.cloudinaryImageId} />
            <div className="res-desc">
                <h3>{name}</h3>
                <h4>{cuisines.join(" ")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{resData.info.costForTwo} </h4>
                <h4>{sla.deliveryTime} minutes</h4>
            </div>
        </div>
    )
}

export default RestaurantCard;