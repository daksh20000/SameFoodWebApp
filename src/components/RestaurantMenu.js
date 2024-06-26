import React from 'react'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'
import { CDN_IMAGE_URL, RES_MENU_URL } from '../utils/constants'
import { AiFillStar } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu';


const RestaurantMenu = () => {
    const {resId} = useParams()
    const resInfo = useRestaurantMenu(resId)


    if (resInfo===null) {
        return <Shimmer/>
    }

    const{name, cloudinaryImageId, costForTwoMessage, areaName, avgRating, cuisines } = resInfo?.data?.cards[2]?.card?.card?.info;
    const{itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    

  return (
    <div>  
        <div className='res-menu-head'>
            <div>
                <h1 className='res-name'>{name}</h1>
                <h3 className='cuisines-menu'><span className='cuisine-menu-heading'>CUISINES</span><br/>{cuisines.join(", ")} :  {costForTwoMessage}</h3>
                <h5 className='location-menu'><FaLocationDot /> <span className='location-menu-text'>{areaName}</span></h5>
            </div>
            <div>
                <img className='res-img' src = {CDN_IMAGE_URL + cloudinaryImageId  } />
                <div className='menu-rating'>
                    <h4 className='menu-rate-number'>{avgRating}</h4> 
                    <AiFillStar className='star-rating-menu' />
                </div>
            </div>
            <ul className='menu'>
                <h2 className='menu-heading'>MENU</h2> <br/><br/>
                {/* {itemCards.map((items)=> {
                return (<li key={items?.card?.info?.id} className='menu-items'>{items?.card?.info?.name} - Rs.{items?.card?.info?.variantsV2?.variantGroups[0]?.variations[0]?.price}</li>)
                })} */}
        </ul>
        </div>
        
        
    </div>
  )
}

export default RestaurantMenu