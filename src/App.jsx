import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import img1 from "./assets/Images/1.jpg";
import img2 from "./assets/Images/2.jpg";
import img3 from "./assets/Images/3.jpg";
import img4 from "./assets/Images/4.jpg";
import img5 from "./assets/Images/5.jpg";

function App() {
  return (
    <div className="container">
      <h1 className="heading">Sneakers Gallery</h1>
      <Swiper className="swiper-container"
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={
        {
          rotate:0,
          stretch:0,
          depth:100,
          modifier:2.5,
        }
      } 
      navigation={{prevEl:".swiper-button-prev", nextEl:".swiper-button-next", clickable:true}}
      pagination={{el:".swiper-pagination", clickable:true}}
      modules={[Navigation, Pagination, EffectCoverflow]}
      >
        <SwiperSlide className="swiper-slide">
          <img src={img1} alt="slide_image"></img>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={img2} alt="slide_image"></img>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={img3} alt="slide_image"></img>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={img4} alt="slide_image"></img>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={img5} alt="slide_image"></img>
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow" >
        <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        <div className="swiper-pagination">  </div>
        </div>
           
      </Swiper>
    </div>
  );
}
export default App;
