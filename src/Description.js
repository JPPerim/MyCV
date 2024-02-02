import React from 'react';
import descriptionData from './DATA/description.json';
import './description.css';

const Description = () => {
    return (
        <div className="description-container">
            <h3>OBJETIVOS</h3>
            <p className='description'>{descriptionData.objectives}</p>
        </div>
    );
};

export default Description;
