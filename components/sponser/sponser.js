import React from 'react';
import Styles from '../../style/Sponser.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';



export default function Sponser() {
  return (
    <div className={Styles.sponser}>
    <div className={Styles.sponserParent}>
        <div className='container' id={Styles.sponserContent}>
        <Swiper
     watchSlidesProgress={true} slidesPerView={5} 
     modules={[Autoplay]}
     autoplay={{
      "delay": 2500,
      "disableOnInteraction": false
    }}
     breakpoints={{
      '@0.00': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      '@1.25': {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      '@1.50': {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }}
     className="mySwiper">
        <SwiperSlide>
        <div className={Styles.slideBox}>
                <Image src={require('./images/client1.png')} alt="photo"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={Styles.slideBox}>
                <Image src={require('./images/client2.png')} alt="photo"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={Styles.slideBox}>
                <Image src={require('./images/client3.png')} alt="photo"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={Styles.slideBox}>
                <Image src={require('./images/client4.png')} alt="photo"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={Styles.slideBox}>
                <Image src={require('./images/client4.png')} alt="photo"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={Styles.slideBox}>
                <Image src={require('./images/client4.png')} alt="photo"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={Styles.slideBox}>
                <Image src={require('./images/client4.png')} alt="photo"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={Styles.slideBox}>
                <Image src={require('./images/client4.png')} alt="photo"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={Styles.slideBox}>
                <Image src={require('./images/client4.png')} alt="photo"/>
            </div>
        </SwiperSlide>

      </Swiper>
        </div>
    </div>
    </div>
  )
}
