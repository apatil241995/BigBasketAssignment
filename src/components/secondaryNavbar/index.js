import React from "react";
import './secondaryNavbar.css'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LeftDrawer from "../drawer";
import SearchProduct from '../../modules/actions/searchProduct'
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export default function SecondaryNavbar() {
  const [name, setName] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const itemCount = useSelector(state => state.cart.cartProduct)
  const dispatch = useDispatch()
  const Search = (e) => {
    e.preventDefault()
    dispatch(SearchProduct(name))
  }
  return (
    <div className="secnavbarcontainer">
      <LeftDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="sectopdiv">
        <DensityMediumIcon sx={{
          fill: 'white',
          fontSize: '30px',
          height: '30px',
          position: 'relative',
          margin: '5px auto'
        }} onClick={() => { setIsOpen(true) }} />
        <PersonOutlineOutlinedIcon sx={{
          fill: 'white',
          fontSize: '30px',
          height: '30px',
          position: 'relative',
          margin: '5px auto'
        }} />
        <img src={process.env.REACT_APP_BB_LOGO} alt=""
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

      <form className="secbottomdiv " onSubmit={Search}>
        <input
          type='text'
          className="secsearchbar"
          value={name}
          placeholder={'Search For Product..'}
          onChange={(e) => { setName(e.target.value) }}
        />
        <button className="searchbutton_1" type="submit"><SearchIcon sx={{ fill: 'black' }} /></button>
      </form>

    </div>
  )
}