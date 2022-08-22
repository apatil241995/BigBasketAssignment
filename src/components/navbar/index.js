import React from "react";
import { Box } from "@mui/system";
import './navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SellIcon from '@mui/icons-material/Sell';
import FilterProduct from "../../modules/actions/filterProduct";
import SearchProduct from '../../modules/actions/searchProduct'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function NavBar() {
  const [name, setName] = useState('')
  const itemCount = useSelector(state => state.cart.cartProduct)

  const dispatch = useDispatch()
  const ChnageCategory = (e) => {
    dispatch(FilterProduct(e.target.value))
  }
  const Search = (e) => {
    e.preventDefault()
    dispatch(SearchProduct(name))
  }
  return (
    <Box sx={{
      width: '100%',
      height: '124px',
      background: 'white',
      position: 'sticky',
      top: '0',
      zIndex: '2'
    }}>
      <div className="navcontainer">
        <div className="topnavdiv">
          <img className="phoneicon" src={process.env.REACT_APP_PHONE_ICON} alt='' />
          <samp className="phonenumber">1860 123 1000</samp>
          <img className="locationicon" src={process.env.REACT_APP_LOCATION_ICON} alt='' />
          <samp className="address">560004, Bangalore</samp>
          <img className="profileicon" src={process.env.REACT_APP_PROFILE_ICON} alt='' />
          <samp className="login">Login/Sign Up</samp>
        </div>
        <div className="searchbar">
          <img className="bigbasketimg" src={process.env.REACT_APP_BIGBASKET_ICON_1} alt='' />
          <form onSubmit={Search} style={{
            display: 'flex',
            width: 'fit-content',
            marginLeft: '19%',
            position: 'absolute'
          }}>
            <input className="searchinput" value={name} onChange={(e) => { setName(e.target.value) }}></input>
            <button className="searchbutton" type="submit"><SearchOutlinedIcon sx={{
              fill: 'white'
            }}
            /></button>
          </form>
          <div className="cartdiv">
            <ShoppingCartIcon sx={{
              fontSize: '2.6rem',
              fill: 'red',
              marginTop: '7%',
              marginbottom: 'auto',
              position: 'absolute',
              float: 'left',
              left: '3%'
            }} />
            <p style={{
              fontSize: '13px',
              textAlign: 'right',
              marginLeft: '50px',
              width: '60px'
            }}>My basket {itemCount} items</p>
          </div>
        </div>

        <div className="bottomnavdiv">
          <form id="filter" onChange={ChnageCategory}>
            <select form="filter" className="filterdropdown " >
              <option value="all">All</option>
              <option value="Fruits and Vegitables">Fruits and Vegitables</option>
              <option value="Foodgrains, Oils & Masala">Foodgrains, Oils & Masala</option>
              <option value="Bakery, Cakes & Dairy">Bakery, Cakes & Dairy</option>
            </select>
          </form>
          <div className="offerdiv">
            <SellIcon sx={{
              fontSize: '1.5rem',
              fill: 'red',
              top: '5px',
              position: 'relative'
            }} />
            <p className="offertext">OFFERS</p>
          </div>
        </div>
      </div>
    </Box>
  )
}