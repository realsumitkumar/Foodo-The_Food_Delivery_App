import { RES_LOGO } from "../utils/constants"

const RestaurantItems = ({ data }) => {
    // console.log(data.card.info.)
    return (
        <div>
            <div>{data.map((d) => {
                return (
                    <div key={d?.card?.info?.id} className="m-2 p-2">
                        <div className="text-left mx-2 px-2 font-bold text-sm">
                            {d?.card?.info?.name}: - ₹{d?.card?.info?.price / 100 || d?.card?.info?.defaultPrice / 100}
                            <span className="flex">
                                <img className="h-15 w-20 rounded-md" src={RES_LOGO + d?.card?.info?.imageId} alt="image" />
                                <button className="absolute bg-gray-900 text-white rounded-sm text-xs ">Add +</button>
                                <p className="text-left text-xs border-purple-50 border-b-[0.5px] mx-2 px-2 pb-4">{d?.card?.info?.description}</p>
                            </span>
                        </div>
                    </div>
                )
            })}</div>
        </div>
    )
}

export default RestaurantItems