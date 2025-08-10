import React from 'react'
import ServiceCard from "../services/ServiceCard";
import {Col} from "reactstrap";

import weatherImg from "../assets/images/weather.png"
import guideImg from "../assets/images/guide.png"
import customizationImg from "../assets/images/customization.png"

const servicesData=[
    {
        imgUrl:weatherImg,
        title:"Calculate Weather",
        desc: "Get real-time weather updates for your favorite travel destinations."
    },

    {
        imgUrl:guideImg,
        title:"Best Tour Guide",
        desc: "Local experts offer authentic experiences and cultural insights."
    },

    {
        imgUrl:customizationImg,
        title:"Customization",
        desc: "Plan your trip the way you like, easily and quickly."
    },
]
const ServiceList = () => {
  return (
    <>
    {servicesData.map((item,index)=>
    (
        <Col lg='3' key={index}>
            <ServiceCard item={item} />
        </Col>
    ))}
    </>
  )
}

export default ServiceList
