import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([])
    const [searchText, setSearchText] = useState("")
    const [filteredList, setFilteredList] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6713752&lng=77.2692261&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json()

        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }


    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="search">
                <input type="text" className="search-text" placeholder="Search Restaurant" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                <button className="search-btn" onClick={() => {
                    const searchedList = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredList(searchedList)
                }}>Search</button>
            </div>
            <div>
                <button className="topResBtn" onClick={() => {
                    let filteredList = listOfRestaurant.filter((res) => (
                        res.info.avgRating > 4
                    ))
                    setFilteredList(filteredList)
                }}
                >Top restaurant</button>
            </div>
            <div className="res-container">
                {
                    filteredList.map((restaurant) => (
                        <Link key={restaurant.info.id}
                            to={"/restaurants/" + restaurant.info.id}
                        >
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;