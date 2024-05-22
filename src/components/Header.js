import { LOGO_URL } from "../utils/constants";
import { useState } from "react"

const Header = () => {
    const [text, setText] = useState("Log-in")

    return (
        < div className="header" >
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Services</li>
                    <li>Cart</li>
                    <button onClick={() => {
                        text === "Log-out" ? setText("Log-in") : setText("Log-out")
                    }}>{text}</button>
                </ul>
            </div>
        </div>

    )
}

export default Header;