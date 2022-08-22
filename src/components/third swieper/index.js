import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './thirdSwiper.css'


export default function ThirdSwiper() {

  return (
    <div className="thirdswiper">
      <Swiper
        slidesPerView={2}
        spaceBetween={3}
        slidesPerGroup={2}
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
          <img className="thirdimg " style={{ width: 'fit-content' }} src={process.env.REACT_APP_EGGS} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="thirdimg " style={{ width: 'fit-content' }} src={process.env.REACT_APP_NEU} alt="" />

        </SwiperSlide>
        <SwiperSlide>
          <img className="thirdimg " style={{ width: 'fit-content' }} src={process.env.REACT_APP_AYURVEDA} alt="" />

        </SwiperSlide>

        <SwiperSlide>
          <img className="thirdimg " style={{ width: 'fit-content' }} src={process.env.REACT_APP_BUY} alt="" />
        </SwiperSlide>
        <SwiperSlide>

          <img className="thirdimg " style={{ width: 'fit-content' }} src={process.env.REACT_APP_DEALS} alt="" />

        </SwiperSlide>
        <SwiperSlide >

          <img className="thirdimg " style={{ width: 'fit-content' }} src={process.env.REACT_APP_COMBO} alt="" />
        </SwiperSlide>
      </Swiper>

    </div>
  );
}