import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
    const [resMenu, setResMenu] = useState("");
    const { resId } = useParams(); // Destructuring on the fly the value which we get from useParams()

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const data = await fetch(MENU_URL + resId);
            const json = await data.json();
            setResMenu(json?.data);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    if (!resMenu) {
        return <Shimmer />;
    }

    const { name, areaName, avgRating, costForTwoMessage, cuisines } = resMenu?.cards[2]?.card?.card?.info;
    const { itemCards } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="res-menu">
            <h1>{name} : {areaName}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating} Stars : {costForTwoMessage}</h3>
            <h3>Menu Items</h3>
            <ul>
                {itemCards ? (
                    itemCards.map((item) => (
                        <li key={item.card.info.id}>
                            {item.card.info.name} - Rs.{item.card.info.price / 100}
                        </li>
                    ))
                ) : (
                    <li>No menu items available</li>
                )}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
