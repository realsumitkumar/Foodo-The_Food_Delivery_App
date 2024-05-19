import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useState } from "react"

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(resList)

    // const [listOfRestaurant, setListOfRestaurant] = arr
    // const listOfRestaurant = arr[0]
    // const setListOfRestaurant = arr[1]

    return (
        <div className="body">
            <div className="search">Search</div>
            <div>
                <button className="topResBtn" onClick={() => {
                    filteredList = listOfRestaurant.filter((res) => (
                        res.info.avgRating > 4
                    ))
                    setListOfRestaurant(filteredList)
                }}
                >Top restaurant</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurant.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;