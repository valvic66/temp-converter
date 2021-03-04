import React, { useState } from 'react';
import { TemperatureField } from './TemperatureField';
import './Temperature.css';

export const Temperature = () => {
    const [tempC, setTempC] = useState();
    const [tempF, setTempF] = useState();

    const handleOnChangeTempC = (event) => {
        setTempC(event.target.value);

        if(event.target.value && !isNaN(event.target.value)) {
            setTempF( (event.target.value * 9/5 + 32).toFixed(0) );
        } else {
            setTempF('');
        }
    };

    const handleOnChangeTempF = (event) => {
        setTempF(event.target.value);
        
        if(event.target.value && !isNaN(event.target.value)) {
            setTempC( ((event.target.value - 32) * (5/9)).toFixed(0) );
        } else {
            setTempC('');
        }
    };

    return (
      <div className="temperature-wrapper">
        <TemperatureField value={tempC} name='Celsius' onChange={handleOnChangeTempC} />
        <p>=</p>
        <TemperatureField value={tempF} name='Fahrenheit' onChange={handleOnChangeTempF} />
      </div>
    );
  };