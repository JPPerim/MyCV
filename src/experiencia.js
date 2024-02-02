import React from 'react';
import professionalExperienceData from './DATA/experiencia.json';
import './experiencia.css';

const Experiencia = () => {
    return (
        <div>
            <h2>EXPERIÊNCIA PROFISSIONAL</h2>
            <div className="experience-container">
                {professionalExperienceData.professionalExperience.map((experience, index) => (
                    <div key={index} className="experience-entry">
                        <h3>{experience.company}</h3>
                        <p>{experience.period}</p>
                        <p>{experience.role} - {experience.location}</p>
                        <ul>
                            {experience.responsibilities.map((responsibility, itemIndex) => (
                            <li key={itemIndex}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experiencia;