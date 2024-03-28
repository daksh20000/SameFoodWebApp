
import { CDN_IMAGE_URL } from "../utils/constants"
import { AiFillStar } from "react-icons/ai"
const RestaurantCard = (props)=>{
    const{resData} = props
    const{cloudinaryImageId, name, cuisines, avgRating} = resData?.info
    const{deliveryTime} = resData?.info?.sla
    return (
        <div className="res-card1 m-2 p-4 h-[330px] w-[225px] text-pretty bg-slate-200 rounded-lg hover:bg-gray-300">
            <img className= "resCard-img w-[200px] h-[150px] rounded-lg mb-1" src={CDN_IMAGE_URL+ cloudinaryImageId}  alt="food photo"/>
            <div className="card-text  font-semibold">
            <h3 className="card-title text-base underline font-bold "> {name}</h3>
            <h4 className="cuisine text-sm">{cuisines.join(", ")}</h4>
            <h4 className="text-base"><span className="font-bold">Avg. Rating :</span> {avgRating} <AiFillStar className='inline ' /> </h4>
            <h4 className="text-sm	font-bold">{deliveryTime} mins away</h4>
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