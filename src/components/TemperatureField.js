import React from 'react';
import './TemperatureField.css';

export const TemperatureField = ({ value, name, onChange }) => {
    return (
      <div className='temperature-field-wrapper'>
        <input
            type='temperature'
            id='temperature'
            name='temperature'
            value={value}
            size={4}
            onChange={onChange}
        />
        <label htmlFor='temperature' className='temperature-label'>{name}</label>
      </div>
    );
  };