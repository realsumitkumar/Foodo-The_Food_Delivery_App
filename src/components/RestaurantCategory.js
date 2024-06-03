import RestaurantItems from "./RestaurantItems";

const RestaurantCategory = ({ data }) => {
    return (
        <div className="w-6/12 mx-auto my-4 p-4 bg-gray-100 rounded-md shadow-lg">
            <div className="flex justify-between">
                <span className="font-bold text-lg">{data.title}</span>
                <span>⬇️</span>
            </div>
            <RestaurantItems data={data?.itemCards} />
        </div>
    )
}

export default RestaurantCategory;