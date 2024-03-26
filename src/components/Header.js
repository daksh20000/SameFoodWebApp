import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"

const Header = ()=>{
    let [login, setLogin] = useState("Login")
    return(
        <div className="header">
            <div className="logo-container">
                <img className="header-logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/order">Orders</Link></li>
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