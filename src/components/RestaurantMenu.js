import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams(); // Destructuring on the fly the value which we get from useParams()

    const resMenu = useRestaurantMenu(resId)

    const [showIndex, setShowIndex] = useState([])

    if (!resMenu) {
        return <Shimmer />;
    }

    const { name, areaName, cuisines } = resMenu?.cards[2]?.card?.card?.info;

    // console.log(resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR)

    //filters the card with ItemCategory 
    const itemCategory = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => {
        return (c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    })

    return (
        <div className="res-menu text-center">
            <h1 className="text-xl font-bold">{name} : {areaName}</h1>
            <h3 className="text-lg font-bold">Cuisines: {cuisines.join(", ")}</h3>
            <div>
                {itemCategory.map((category, index) => {
                    return (
                        <RestaurantCategory key={category?.card?.card?.title} data={category?.card.card}

                            showItems={index === showIndex ? true : false}

                            setShowIndex={() => setShowIndex(index)}//this function will only be called from child(RestaurantCategory) and index is already provided beforehand
                        />
                    )
                })}
            </div>

        </div>
    );
};

export default RestaurantMenu;
