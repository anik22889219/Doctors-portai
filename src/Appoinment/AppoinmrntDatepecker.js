import React, { useState } from 'react';
import chair from '../assets/images/chair.png'
import chairbg from '../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppoinmrntDatepecker = ({selected,setSeleted}) => {
    
    return (
        <div style={{
            background: `url(${chairbg})`,
            backgroundSize:'cover'
        }} className="hero min-h-screen ">
  <div className="hero-content flex-col  lg:flex-row-reverse">
    <img src={chair} className="max-w-lg rounded-lg shadow-2xl"  alt='chair'/>
    <div  className='card lg-max-w-lg bg-base-100 shadow-xl lg:me-20'>
    <DayPicker
      mode="single"
      required
      selected={selected}
      onSelect={setSeleted}
    />
    </div>
  </div>
</div>
    );
};

export default AppoinmrntDatepecker;