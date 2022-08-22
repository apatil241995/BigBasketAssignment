import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './secondarySwiper.css'


export default function SecondarySwiper() {

  return (
    <div className="secondaryswiper">
      <Swiper
        slidesPerView={3}
        spaceBetween={3}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={false}
        pagination={{
          clickable: true
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img style={{ width: 'fit-content' }} src={process.env.REACT_APP_EGGS} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: 'fit-content' }} src={process.env.REACT_APP_NEU} alt="" />

        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: 'fit-content' }} src={process.env.REACT_APP_AYURVEDA} alt="" />

        </SwiperSlide>

        <SwiperSlide>
          <img style={{ width: 'fit-content' }} src={process.env.REACT_APP_BUY} alt="" />
        </SwiperSlide>
        <SwiperSlide>

          <img style={{ width: 'fit-content' }} src={process.env.REACT_APP_DEALS} alt="" />

        </SwiperSlide>
        <SwiperSlide >

          <img style={{ width: 'fit-content' }} src={process.env.REACT_APP_COMBO} alt="" />
        </SwiperSlide>
      </Swiper>

    </div>
  );
}