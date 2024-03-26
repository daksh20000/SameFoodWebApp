import RestaurantCard from "./Restaurantcard"
import resList from "../utils/mockData"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"

const Body = ()=>{
    
    const [RES_DYNAMIC_DATA, setRES_DYNAMIC_DATA] = useState([])
    const [searchText, setSearchText] = useState("")
    const [filteredRestaurant, setFilteredRestaurant] = useState([])

    useEffect(
        ()=>{
            fetchData()
        },[]
    )
    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            )
            const json = await data.json()
            console.log(json);
            setRES_DYNAMIC_DATA(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            
    }

    console.log("to check rerendering on searchbox");
//              shimmer practice

    // if(RES_DYNAMIC_DATA.length === 0 ){
    //     return <Shimmer/>
    // }

    return  RES_DYNAMIC_DATA.length===0 ? (
        <Shimmer/>
    ) :         (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button className="search-button"
                    onClick ={
                        () => {
                                const searchedRes = RES_DYNAMIC_DATA.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                                setFilteredRestaurant (searchedRes)
                        }
                    }>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredRating = RES_DYNAMIC_DATA.filter(
                        (res)=>(res.info.avgRating > 4.3));
                        setFilteredRestaurant(filteredRating)
                        
                }}>
                    Top Rated Restraunts
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((eachRestaurantNum)=>(
                <Link key = {eachRestaurantNum.info.id} to={"/restaurants/"+eachRestaurantNum.info.id}><RestaurantCard  resData= {eachRestaurantNum}/></Link>
                ))}
            </div>
        </div>
    )
}

export default Body