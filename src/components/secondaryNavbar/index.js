import React from "react";
import './secondaryNavbar.css'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useSelector } from "react-redux";

export default function SecondaryNavbar() {
  const itemCount = useSelector(state => state.cart.cartProduct)
  return (
    <div className="secnavbarcontainer">
      <div className="sectopdiv">
        <DensityMediumIcon sx={{
          fill: 'white',
          fontSize: '30px',
          height: '30px',
          position: 'relative',
          margin: '5px auto'
        }} />
        <PersonOutlineOutlinedIcon sx={{
          fill: 'white',
          fontSize: '30px',
          height: '30px',
          position: 'relative',
          margin: '5px auto'
        }} />
        <img src="https://www.bbassets.com/static/v2570/custPage/build/content/img/bb-icon.png" alt=""
          style={{
            fill: 'white',
            width: '30px',
            height: '30px',
            position: 'relative',
            margin: '5px auto'
          }} />
        <LocationOnOutlinedIcon sx={{
          fill: 'white',
          fontSize: '30px',
          height: '30px',
          position: 'relative',
          margin: '5px auto'
        }} />
        <ShoppingCartOutlinedIcon sx={{
          fill: 'white',
          fontSize: '30px',
          height: '30px',
          position: 'relative',
          margin: '5px auto'
        }} />
        <div className="cartcount">
          <p style={{
            margin: '0 0',
            fontSize: '10px',
            color: 'white'
          }}>{itemCount}</p>
        </div>
      </div>
      <div className="secbottomdiv ">
        <input type='text' className="secsearchbar" defaultValue={'Search For Product..'} />
      </div>
    </div>
  )
}