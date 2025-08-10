import React from 'react'
import "./serviceCard.css"

const ServiceCard = ({item}) => {
    const {imgUrl,title,desc}=item
  return (
    <div className='service_item'>
      <img className="service_img" src={imgUrl} alt="" />
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
    
  )
}

export default ServiceCard
