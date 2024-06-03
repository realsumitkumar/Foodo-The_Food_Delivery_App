import RestaurantCard, { withPromotedRestaurant } from "./RestaurantCard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([])
    const [searchText, setSearchText] = useState("")
    const [filteredList, setFilteredList] = useState([])

    //a higher-order component is a function that takes a component and returns a new component.
    const PromotedRestaurant = withPromotedRestaurant(RestaurantCard)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6713752&lng=77.2692261&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    //checking if the internet is working
    const onlineStatus = useOnlineStatus()
    if (onlineStatus === false) {
        return (
            <center>Internet connection is not working , kindly connect to the Internet</center>
        )
    }

    return listOfRestaurant?.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex mx-5">
                <div className="search m-5">
                    <input type="text" className="search-text mx-5  bg-slate-600 rounded-md" placeholder="Search Restaurant" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                    <button className="search-btn w-40 bg-slate-600 rounded-md" onClick={() => {
                        const searchedList = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredList(searchedList)
                    }}>Search</button>
                </div>
                <div className="m-5  bg-slate-600 rounded-md">
                    <button className="topResBtn" onClick={() => {
                        let filteredList = listOfRestaurant.filter((res) => (
                            res.info.avgRating > 4
                        ))
                        setFilteredList(filteredList)
                    }}
                    >Top restaurant</button>
                </div>
            </div>
            <div className="res-container flex flex-wrap">
                {
                    filteredList?.map((restaurant) => (
                        <Link key={restaurant.info.id}
                            to={"/restaurants/" + restaurant.info.id}
                        >
                            {/* write the logic that if the restaurant is promoted than withPromotedRestaurant card will be loaded else simple Restaurant card will be loaded */}
                            {restaurant.info.aggregatedDiscountInfoV3 ? (<PromotedRestaurant resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)
                            }
                        </Link>
                    ))
                }

                {console.log(listOfRestaurant)}
            </div>
        </div>
    )
}

export default Body;