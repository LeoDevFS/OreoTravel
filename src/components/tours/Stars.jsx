import React from 'react'
import { FaRegStar,FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

function Stars({stars}) {
const getStarIcon = (stars,index) =>{
    const number = index + 0.5
    if(stars >= index + 1 ) return  <FaStar />
    if (stars >= number) return   <FaStarHalfStroke />
    return <FaRegStar />
} 

const ratingStars = Array.from({length:5}, (_,index)=>(
    <li className="star" key={index}>
      {getStarIcon(stars,index)}
    </li>
))

  return (
    <>
    
   <ul className="star-wrapper">{ratingStars}</ul>
   
    </>
  )
}

export default Stars