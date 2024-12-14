import React from 'react';
import Styles from '../../style/Rules.module.css';
import { TbActivityHeartbeat } from "react-icons/tb";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';



export default function Rules() {
  return (
    <div className={Styles.rules}>
        <div className='head'>
                <h1>We Maintain Cleanliness Rules Inside Our Hospital</h1>
                <span><TbActivityHeartbeat /></span>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
            </div>
            <div className={Styles.sliderContent}>
            <Swiper
     watchSlidesProgress={true} slidesPerView={4} 
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
                <Image src={require('./images/slide-01.jpeg')} alt="photo"/>
                <div className={Styles.btn}>
                    <button>View Details</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={Styles.slideBox}>
                <Image src={require('./images/slide-02.avif')} alt="photo"/>
                <div className={Styles.btn}>
                    <button>View Details</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={Styles.slideBox}>
                <Image src={require('./images/slide-03.jpg')} alt="photo"/>
                <div className={Styles.btn}>
                    <button>View Details</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={Styles.slideBox}>
                <Image src={require('./images/slide-04.jpg')} alt="photo"/>
                <div className={Styles.btn}>
                    <button>View Details</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={Styles.slideBox}>
                <Image src={require('./images/slide-01.jpeg')} alt="photo"/>
                <div className={Styles.btn}>
                    <button>View Details</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={Styles.slideBox}>
                <Image src={require('./images/slide-02.avif')} alt="photo"/>
                <div className={Styles.btn}>
                    <button>View Details</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={Styles.slideBox}>
                <Image src={require('./images/slide-03.jpg')} alt="photo"/>
                <div className={Styles.btn}>
                    <button>View Details</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={Styles.slideBox}>
                <Image src={require('./images/slide-04.jpg')} alt="photo"/>
                <div className={Styles.btn}>
                    <button>View Details</button>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
            </div>
    </div>
  )
}
