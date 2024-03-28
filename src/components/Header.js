import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = ()=>{
    let [login, setLogin] = useState("Login")
    const onlineStatus = useOnlineStatus()
    return(
        <div className="flex justify-between bg-lime-300 mb-4 shadow-xl rounded-b-lg">
            <div className="">
                <Link to ={"/"}><img className=" pt-2 pl-7 h-20" src={LOGO_URL} alt="logo" /></Link>
            </div>
            <div className=" font-semibold">
                <ul className="flex p-5 m-3  ">
                    <li className=" pr-96 "><span className=" px-2 py-1 border-2 border-violet-600 rounded-lg">Online Status {onlineStatus ? "🟢" : "🟥"}</span> </li>
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About Us</Link></li>
                    <li className="px-2"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-2"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-2"><Link to="/cart">Cart</Link></li>
                    <button className="px-2" onClick={()=>{
                        login==="Login"
                        ? setLogin("Logout") 
                        : setLogin("Login")
                    }}> {login}</button>
                </ul>
            </div>
        </div>     
    )
}

export default Header