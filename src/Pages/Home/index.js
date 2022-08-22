import React from "react";
import ProductGrid from "../../components/productgrid";
import NavBar from "../../components/navbar";
import HomeSwiper from "../../components/swiper";
import OffersDiv from "../../components/offers";
import BankOffers from "../../components/bankoffers";
import SecondaryNavbar from "../../components/secondaryNavbar";
import SecondarySwiper from "../../components/secondary swiper";
import ThirdSwiper from "../../components/third swieper";
// import Footer from "../../components/footer";


export default function Home() {

  return (
    <div>
      <SecondaryNavbar />
      <NavBar />
      <HomeSwiper />
      <SecondarySwiper />
      <ThirdSwiper />
      <OffersDiv />
      <p style={{ fontSize: '24px', color: '#444444' }}>Bank Offers</p>
      <BankOffers />
      <ProductGrid />
    </div>

  )
}