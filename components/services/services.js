import React from 'react';
import Styles from '../../style/Services.module.css';
import { FaUserDoctor } from "react-icons/fa6";
import { TbActivityHeartbeat } from "react-icons/tb";
import { IoIosMedkit } from "react-icons/io";
import { CiHospital1 } from "react-icons/ci";

export default function Services() {
  return (
    <div className={Styles.services}>
            <div className='head'>
                <h1>We Are Always Ready to Help You & Your Family</h1>
                <span><TbActivityHeartbeat /></span>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
            </div>
        <div className='container'>
            <div className={Styles.servicesContainer}>
                <div className={Styles.service}>
                    <span><IoIosMedkit /></span>
                    <h3>Emergency Help</h3>
                    <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                </div>
            <div className={Styles.dots}>..................</div>

                <div className={Styles.service}>
                    <span><CiHospital1 /></span>
                    <h3>Enriched Pharmecy</h3>
                    <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                </div>
            <div className={Styles.dots}>..................</div>

                <div className={Styles.service}>
                    <span><FaUserDoctor /></span>
                    <h3>Medical Treatment</h3>
                    <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
