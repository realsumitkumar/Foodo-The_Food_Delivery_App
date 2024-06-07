import { useDispatch, useSelector } from "react-redux";
import RestaurantItems from "./RestaurantItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())

    }

    return (
        <div className="text-center font-bold">
            <h1 className="m-1 p-1 text-xl">Cart</h1>
            <button className="font-bold bg-purple-800 rounded-md border-2 p-1" onClick={handleClearCart}>Clear Cart</button>
            <div className="w-6/12 m-auto">
                {cartItems.length === 0 ? <h1 className="m-4 p-4">Cart is empty, add Items in your cart</h1> : <RestaurantItems data={cartItems} />}
            </div>
        </div>
    )
}

export default Cart;