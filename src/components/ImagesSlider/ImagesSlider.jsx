import './imagesSlider.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import images1 from '../../images/sliderImg1.jpeg';
import images2 from '../../images/sliderImg2.jpg';
import images3 from '../../images/sliderImg3.jpg';
import images4 from '../../images/sliderImg4.jpg';
import images5 from '../../images/sliderImg5.jpg';

const ImagesSlider = () => {
    const imagesArr = [images1, images2, images3, images4, images5];
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <section>
            <div className="container">
                <div className="secSliderImages">
                    <h6>անցած ուղին</h6>
                    
                    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {
          imagesArr.map((el, idx) => {
            return (
              <SwiperSlide key={idx}>
                <img src={el} alt='name'/>
              </SwiperSlide>
            )
          })
        }
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
                </div>
            </div>
        </section>
    )
}

export default ImagesSlider;