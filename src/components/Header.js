import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = ()=>{
    let [login, setLogin] = useState("Login")
    const onlineStatus = useOnlineStatus()
    return(
        <div className="header">
            <div className="logo-container">
                <Link to ={"/"}><img className="header-logo" src={LOGO_URL} alt="logo" /></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status {onlineStatus ? "🟢" : "🟥"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button onClick={()=>{
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