import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './swiper.css'

export default function HomeSwiper() {
  const array = ['Offer On Staples', 'Fresho Seat', 'Freedom Sale Select', 'BB Home', 'Happy Sheff', 'Paneer Store', 'Testies Origin']
  const params = {
    clickable: true,
    renderBullet: (index, pagination) => {
      return '<span class="' + pagination + '">' + (array[index]) + '</span>';
    }
  }
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={params}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"

      >
        <SwiperSlide sx={{
          width: '100%'
        }}><img style={{ width: '100%' }} src={process.env.REACT_APP_STAPLES_OFFER} alt="" />
        </SwiperSlide>
        <SwiperSlide sx={{
          width: '100%'
        }}><img style={{ width: '100%' }} src={process.env.REACT_APP_FRESHO_SEAT} alt="" />
        </SwiperSlide>
        <SwiperSlide sx={{
          width: '100%'
        }}><img style={{ width: '100%' }} src={process.env.REACT_APP_FREEDOM_SALE} alt="" />
        </SwiperSlide>
        <SwiperSlide sx={{
          width: '100%'
        }}><img style={{ width: '100%' }} src={process.env.REACT_APP_BB_HOME} alt="" />
        </SwiperSlide>
        <SwiperSlide sx={{
          width: '100%'
        }}><img style={{ width: '100%' }} src={process.env.REACT_APP_HAPPY_SHEFF} alt="" />
        </SwiperSlide>
        <SwiperSlide sx={{
          width: '100%'
        }}><img style={{ width: '100%' }} src={process.env.REACT_APP_PANEER_STORE} alt="" />
        </SwiperSlide>
        <SwiperSlide sx={{
          width: '100%'
        }}><img style={{ width: '100%' }} src={process.env.REACT_APP_TESTIES_ORIGIN} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}