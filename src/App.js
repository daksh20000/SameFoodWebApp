import React, { Component, Suspense, lazy,  } from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import Cart from "./components/Cart"
import RestaurantMenu from "./components/RestaurantMenu"

const Grocery = lazy(()=> import('./components/Grocery'))

const AppLayout = ()=>{
    return (<div className="app">
        <Header />
        <Outlet />
    </div>)
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback = {<h1>Loading Grocery .........</h1>}><Grocery/></Suspense>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>

            }

        ],
        errorElement: <Error/>
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
