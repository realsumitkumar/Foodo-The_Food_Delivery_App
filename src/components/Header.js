import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [text, setText] = useState("Log-in")

    const onlineStatus = useOnlineStatus()

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
                    <li className="mx-5">Cart</li>
                    <button className="flex m-5" onClick={() => {
                        text === "Log-out" ? setText("Log-in") : setText("Log-out")
                    }}>{text}</button>
                </ul>
            </div>
        </div>

    )
}

export default Header;