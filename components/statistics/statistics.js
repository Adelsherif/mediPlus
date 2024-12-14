import React from 'react';
import Styles from '../../style/Statistics.module.css';
import { FaHome,FaUser,FaRegSmile } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

export default function Statistics() {
  return (
    <div className={Styles.statistics}>
    <div className={Styles.statisticsCover}>
        <div className='container' id={Styles.statisticsContent}>
            <div className={Styles.statisticsBox}>
                <div className={Styles.icon}><FaHome /></div>
                <div className={Styles.numbers}>
                    <h2>3468</h2>
                    <p>Hospital Rooms</p>
                </div>
            </div>
            <div className={Styles.statisticsBox}>
                <div className={Styles.icon}><FaUser /></div>
                <div className={Styles.numbers}>
                    <h2>557</h2>
                    <p>Specialist Doctors</p>
                </div>
            </div>
            <div className={Styles.statisticsBox}>
                <div className={Styles.icon}><FaRegSmile /></div>
                <div className={Styles.numbers}>
                    <h2>4379</h2>
                    <p>Happy Patients</p>
                </div>
            </div>
            <div className={Styles.statisticsBox}>
                <div className={Styles.icon}><SlCalender /></div>
                <div className={Styles.numbers}>
                    <h2>32</h2>
                    <p>Years of Experience</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
