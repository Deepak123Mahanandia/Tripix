import React from 'react';
import ServiceCard from "./ServiceCard"; // Make sure path is correct
import { Col } from "reactstrap";
import { FaPhoneAlt, FaUserFriends, FaCogs } from "react-icons/fa"; // Import icons

const servicesData = [
  {
    icon: <FaPhoneAlt />,
    title: "24/7 Call Support",
    desc: "Our support team is available around the clock to assist you."
  },
  {
    icon: <FaUserFriends />,
    title: "Best Tour Guide",
    desc: "Local experts offer authentic experiences and cultural insights."
  },
  {
    icon: <FaCogs />,
    title: "Customization",
    desc: "Plan your trip the way you like, easily and quickly."
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;