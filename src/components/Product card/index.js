import { Typography } from "@mui/material";
import { useState } from "react";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import AddTocart from "../../modules/actions/addToCart";
import RemoveFromcart from "../../modules/actions/removeFromCart";
import { useDispatch } from "react-redux";
import './productcard.css'



export default function ProductCard(props) {
  const { name, company, price, image, offer } = props.productdata;
  const [quant, setQuant] = useState(0)
  const id1 = name
  const id2 = '1' + name
  const dispatch = useDispatch()

  const handeladd = () => {
    setQuant(quant + 1)
    document.getElementById(id1).style.display = "none";
    document.getElementById(id2).style.display = "flex";
    dispatch(AddTocart())
  }

  const handelincrease = () => {

    setQuant(quant + 1)
  }
  const handeldecrease = (e) => {
    setQuant(quant - 1)
    if (quant === 1) {
      document.getElementById(id1).style.display = "flex";
      document.getElementById(id2).style.display = "none";
      dispatch(RemoveFromcart())
    }
  }
  return (
    <div className="productCard">
      <div className="offerbox">
        <Typography class="offertext_1">
          {offer}
        </Typography>

        <NewReleasesIcon sx={{
          width: '0.9rem',
          height: '0.9rem',
          float: 'right',
          fontSize: '2rem',
          marginTop: 'auto',
          marginBottom: 'auto',
          marginLeft: '3px'
        }} />
      </div>
      <img className="productimage" src={image} alt=''></img>
      <img className="vegmark" src={process.env.REACT_APP_VEG_SYMBOL} alt=""></img>
      <Typography class="companyname">
        {company}
      </Typography>
      <Typography class="productname">
        {name}
      </Typography>
      <form>
        <select class="weightdropdown" defaultValue={''}>
          <option value="40">500gm - Rs. 40</option>
          <option value="80">1kg - Rs. 80</option>
          <option value="160">2kg - Rs. 160</option>
        </select>
      </form>
      <div className="pricequantitydiv">
        <div className="pricediv">
          <Typography class='mrp'>MRP:</Typography>
          <Typography class="price">{price}</Typography>
        </div>
        <div className="deliverydiv">
          <img className="truckicon" src={process.env.REACT_APP_TRUCK_ICON} alt="" />
          <p className="delivery">Standard Delivery: Today 9:00AM - 11:00AM</p>
        </div>
        <div id={id1} className="quantitydiv">
          <div class="qty">
            <Typography class='quantity'>Qty</Typography>
            <input className="priceinput" defaultValue={1}></input>
          </div>
          <button class='addbutton' onClick={handeladd}>
            ADD
          </button>
        </div>
        <div id={id2} className="quantitydiv_2">
          <button class='subquantitybutton' onClick={handeldecrease}>-</button>
          <Typography class='basketquantity '>{quant} in basket</Typography>
          <button class='addquantitybutton' onClick={handelincrease}>+</button>
        </div>
      </div>
    </div>

  );
}