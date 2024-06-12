import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu"
import Shimmer from "./components/Shimmer"
import UserContext from "./utils/UserContext"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"

//lazy loading, code splitting, chunking, dynamic loading
const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))

const AppLayout = () => {

    const [userName, setUserName] = useState([])

    useEffect(() => {
        //suppose fetching userName Password from the API and we got the data 
        const data = {
            name: "Sumit Kumar"
        }
        setUserName(data.name)
    }, [])

    return (
        //redux-toolkit from redux
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedUserInfo: userName, setUserName }}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const browserRoutes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: (<Suspense fallback={<h1>Loading Please wait...</h1>}>  <About />   </Suspense>),
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: (<Suspense fallback={<h1>Loading Please wait...</h1>}> <Grocery /> </Suspense>)
            },
            {
                path: "/cart",
                element: <Cart />

            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />

            }


        ],
        errorElement: <Error />,
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={browserRoutes} />)


// Episode 12 - 2.27

