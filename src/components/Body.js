import RestaurantCard from "./Restaurantcard"
import resList from "../utils/mockData"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

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


    //checking online status

    const onlineStatus = useOnlineStatus();
    if (onlineStatus == false){
        return (
            <h1>!!! Please Check Your Internet Connection !!!</h1>
        )
    }

    return  RES_DYNAMIC_DATA.length===0 ? (
        <Shimmer/>
    ) :         (
        <div className="body">
            <div className="filter flex ml-96">
                <div className="search p-5 ml-7 ">
                    <input type="text" className="search-box border-2 border-black rounded-md pl-1" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button className="search-button ml-3 bg-orange-300 border px-2 py-0.5 rounded-md font-semibold"
                    onClick ={
                        () => {
                                const searchedRes = RES_DYNAMIC_DATA.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                                setFilteredRestaurant (searchedRes)
                        }
                    }>Search</button>
                </div>
                <div className="mt-[13px]  ml-8 font-semibold">
                <button className="filter-btn bg-zinc-400 p-2 rounded-lg " onClick={()=>{
                    const filteredRating = RES_DYNAMIC_DATA.filter(
                        (res)=>(res.info.avgRating > 4.3));
                        setFilteredRestaurant(filteredRating)
                        
                }}>
                    Top Rated Restraunts
                </button>
                </div>
                
            </div>
            <div className="res-container flex flex-wrap m-2">
                {filteredRestaurant.map((eachRestaurantNum)=>(
                <Link key = {eachRestaurantNum.info.id} to={"/restaurants/"+eachRestaurantNum.info.id}><RestaurantCard  resData= {eachRestaurantNum}/></Link>
                ))}
            </div>
        </div>
    )
}

export default Body