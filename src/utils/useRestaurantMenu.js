import { useEffect, useState } from "react";
import { RES_MENU_URL } from "./constants"

const useRestaurantMenu = (resId)=>{
    const [resInfo, setResInfo] = useState(null)
    
    useEffect(()=>{
        fetchData()
    },[])
    
    const fetchData = async ()=>{
        const swiggyData = await fetch(RES_MENU_URL + resId)
        const json = await swiggyData.json()
        setResInfo(json)
    }

    
    return resInfo
}

export default useRestaurantMenu;

