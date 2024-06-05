import { createContext } from "react";

const UserContext = createContext({
    loggedUserInfo: "Default User",
})

export default UserContext;