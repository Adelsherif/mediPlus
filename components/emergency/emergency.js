import React from 'react';
import Styles from '../../style/Emergency.module.css';

export default function Emergency() {
  return (
    <div className={Styles.emergency}>
        <div className={Styles.emergencyContent}>
        <div className={Styles.innerContent}> 
            <h1>Do you need Emergency Medical Care? Call @ 1234 56789</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor dictum turpis nec gravida.</p>
            <div className={Styles.btns}>
                <button>Contact Now</button>
                <button>Learn More</button>
            </div>
            </div>
        </div>
    </div>
  )
}
