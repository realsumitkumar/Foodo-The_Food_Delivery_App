import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [text, setText] = useState("Log-in")

    const onlineStatus = useOnlineStatus()

    const { loggedUserInfo } = useContext(UserContext)

    //subcribing to the store using a selector, (always subscribe to the store part which is required , don't subscribe the whole store otherwise it will take a performance hit, as the whole store will keep changing even for a small change.)
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)

    return (
        < div className="flex justify-between items-center mx-5" >
            <div className="logo-container ">
                <img className="w-20 shadow-sm rounded-2xl items-center mx-5" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex m-5 items-center">
                    <li className="mx-5">Online status: {onlineStatus ? "🟢" : "🟥"}</li>
                    <li className="mx-5"><Link to="/">Home</Link></li>
                    <li className="mx-5"> <Link to="/about">About</Link></li>
                    <li className="mx-5"> <Link to="/contact">Contact Us</Link></li>
                    <li className="mx-5"> <Link to="/grocery">Grocery</Link></li>

                    <li className="mx-5 font-bold text-xl">
                        <Link to="/cart"> Cart-({cartItems.length} items)</Link>
                    </li>

                    <button className="flex m-5" onClick={() => {
                        text === "Log-out" ? setText("Log-in") : setText("Log-out")
                    }}>{text}</button>

                    <li>{loggedUserInfo}</li>
                </ul>
            </div>
        </div>

    )
}

export default Header;