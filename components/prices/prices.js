import React from 'react';
import Styles from '../../style/Prices.module.css';
import { TbActivityHeartbeat } from "react-icons/tb";
import { GiMedicalThermometer,GiMedicalDrip,GiHeartDrop } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

export default function Prices() {
  return (
    <div className={Styles.prices}>
           <div className='head'>
                <h1>We Provide You The Best Treatment In Resonable Price</h1>
                <span><TbActivityHeartbeat /></span>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
            </div>
        <div className='container' id={Styles.pricesContent}>
            <div className={Styles.priceBox}>
                <div className={Styles.icon}><GiMedicalThermometer /></div>
                <h3>Plastic Suggery</h3>
                <div className={Styles.priceValue}>$199 <sub>/ per visit</sub></div>
                <div className={Styles.priceList}>
                    <ul>
                        <li><span>Lorem ipsum dolor sit</span><span className={Styles.checkedPrice}><FaCheckCircle /></span></li>
                        <li><span>Cubitur sollicitudin fentum</span><span className={Styles.checkedPrice}><FaCheckCircle /></span></li>
                        <li><span>Nullam interdum enim</span><span></span><IoIosCloseCircle /></li>
                        <li><span>Donec ultricies metus</span><span></span><IoIosCloseCircle /></li>
                        <li><span>Pellentesque eget nibh</span><span></span><IoIosCloseCircle /></li>
                    </ul>
                </div>
                <div className={Styles.btn}>
                    <button>Book Now</button>
                </div>
            </div>
            <div className={Styles.priceBox}>
                <div className={Styles.icon}><GiMedicalDrip /></div>
                <h3>Teeth Whitening</h3>
                <div className={Styles.priceValue}>$ 299 <sub>/ per visit</sub></div>
                <div className={Styles.priceList}>
                    <ul>
                        <li><span>Lorem ipsum dolor sit</span><span className={Styles.checkedPrice}><FaCheckCircle /></span></li>
                        <li><span>Cubitur sollicitudin fentum</span><span className={Styles.checkedPrice}><FaCheckCircle /></span></li>
                        <li><span>Nullam interdum enim</span><span></span><IoIosCloseCircle /></li>
                        <li><span>Donec ultricies metus</span><span></span><IoIosCloseCircle /></li>
                        <li><span>Pellentesque eget nibh</span><span></span><IoIosCloseCircle /></li>
                    </ul>
                </div>
                <div className={Styles.btn}>
                    <button>Book Now</button>
                </div>
            </div>
            <div className={Styles.priceBox}>
                <div className={Styles.icon}><GiHeartDrop /></div>
                <h3>Heart Suggery</h3>
                <div className={Styles.priceValue}>$ 399 <sub>/ per visit</sub></div>
                <div className={Styles.priceList}>
                    <ul>
                        <li><span>Lorem ipsum dolor sit</span><span className={Styles.checkedPrice}><FaCheckCircle /></span></li>
                        <li><span>Cubitur sollicitudin fentum</span><span className={Styles.checkedPrice}><FaCheckCircle /></span></li>
                        <li><span>Nullam interdum enim</span><span></span><IoIosCloseCircle /></li>
                        <li><span>Donec ultricies metus</span><span></span><IoIosCloseCircle /></li>
                        <li><span>Pellentesque eget nibh</span><span></span><IoIosCloseCircle /></li>
                    </ul>
                </div>
                <div className={Styles.btn}>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}
