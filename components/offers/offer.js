import React, { useState } from 'react';
import Styles from '../../style/Offers.module.css';
import { TbActivityHeartbeat,TbChartBubbleFilled  } from "react-icons/tb";
import { FaTeeth,FaHeart,FaEye  } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";


export default function Offer() {
    
  return (
    <div className={Styles.offers}>
           <div className='head'>
                <h1>We Offer Different Services To Improve Your Health</h1>
                <span><TbActivityHeartbeat /></span>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
    </div>
            <div className='container' id={Styles.offersContent}>
                <div className={Styles.offerBox}>
                    <div className={Styles.offerIcon}><IoIosPerson /></div>
                        <div className={Styles.offerText}>
                            <h3>General Treatment</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.</p>
                    </div>
                </div>
                <div className={Styles.offerBox}>
                    <div className={Styles.offerIcon}><FaTeeth /></div>
                        <div className={Styles.offerText}>
                            <h3>Teeth Whitening</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.</p>
                    </div>
                </div>
                <div className={Styles.offerBox}>
                    <div className={Styles.offerIcon}><FaHeart /></div>
                        <div className={Styles.offerText}>
                            <h3>Heart Surgery</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.</p>
                    </div>
                </div>
                <div className={Styles.offerBox}>
                    <div className={Styles.offerIcon}><TbChartBubbleFilled /></div>
                        <div className={Styles.offerText}>
                            <h3>Ear Treatment</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.</p>
                    </div>
                </div>
                <div className={Styles.offerBox}>
                    <div className={Styles.offerIcon}><FaEye/></div>
                        <div className={Styles.offerText}>
                            <h3>Vision Problems</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.</p>
                    </div>
                </div>
                <div className={Styles.offerBox}>
                    <div className={Styles.offerIcon}><IoIosPerson /></div>
                        <div className={Styles.offerText}>
                            <h3>Blood Transfusion</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.</p>
                    </div>
                </div>
            </div>
    </div>
  )
}
