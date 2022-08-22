import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './offers.css'


export default function OffersDiv() {
  return (
    <div className="offersdiv">
      <div style={{
        display: 'flex',
        margin: '50px auto',
        position: 'relative',
        width: 'fit-content'
      }}>
        <img className="offerimg" src={process.env.REACT_APP_EGGS} alt="" />
        <img className="offerimg" src={process.env.REACT_APP_NEU} alt="" />
        <img className="offerimg" src={process.env.REACT_APP_AYURVEDA} alt="" />
        <img className="offerimg" src={process.env.REACT_APP_BUY} alt="" />
        <img className="offerimg" src={process.env.REACT_APP_DEALS} alt="" />
        <img className="offerimg" src={process.env.REACT_APP_COMBO} alt="" />
      </div>
    </div>
  )
}