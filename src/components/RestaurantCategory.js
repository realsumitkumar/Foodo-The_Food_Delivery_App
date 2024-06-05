import { useState } from "react";
import RestaurantItems from "./RestaurantItems";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex()

    }


    return (
        <div className="w-6/12 mx-auto my-4 p-4 bg-gray-100 rounded-md shadow-lg">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title}</span>
                <span><button>⬇️</button></span>
            </div>
            {showItems && <RestaurantItems data={data?.itemCards} />}
        </div>
    )
}

export default RestaurantCategory;