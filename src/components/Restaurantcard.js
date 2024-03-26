
import { CDN_IMAGE_URL } from "../utils/constants"
const RestaurantCard = (props)=>{
    const{resData} = props
    const{cloudinaryImageId, name, cuisines, avgRating} = resData?.info
    const{deliveryTime} = resData?.info?.sla
    return (
        <div className="res-card1">
            <img className= "resCard-img" src={CDN_IMAGE_URL+ cloudinaryImageId}  alt="food photo"/>
            <div className="card-text">
            <h3 className="card-title"> {name}</h3>
            <h4 className="cuisine">{cuisines.join(", ")}</h4>
            <h4>Avg. Rating : {avgRating} </h4>
            <h4>{deliveryTime} mins away</h4>
            </div>
        </div>
    )
}
//  *************************** OR ***************************

// const RestrauntCard = (props)=>{
//     const{resData} = props
//     return (
//         <div className="res-card1">
            
//             <img className= "resCard-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId}  alt="food photo"/>
            

//             <div className="card-text">
//             <h3> {resData.info.name}</h3>
//             <h4 className="cuisine">{resData.info.cuisines.join(", ")}</h4>
//             <h4>   {resData.info.avgRating} </h4>
//             <h4>5 mins away</h4>
//             </div>
//         </div>
//     )
// }
//  *************************** OR ***************************

// const RestrauntCard = ({resData})=>{
    
//     return (
//         <div className="res-card1">
            
//             <img className= "resCard-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId}  alt="food photo"/>
            

//             <div className="card-text">
//             <h3> {resData.info.name}</h3>
//             <h4 className="cuisine">{resData.info.cuisines.join(", ")}</h4>
//             <h4>Avg. Rating : {resData.info.avgRating} </h4>
//             <h4>{resData.info.sla.deliveryTime} mins away</h4>
//             </div>
//         </div>
//     )
// }

export default RestaurantCard