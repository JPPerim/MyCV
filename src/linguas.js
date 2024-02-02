import React from 'react';
import linguasData from './DATA/linguas.json';
import './linguas.css';

const Linguas = () => {
    // Define the order of proficiency
    const proficiencyOrder = {
        "Nativo": 1,
        "Avançado": 2,
        "Intermediário": 3,
        "Básico": 4
    };

    // Sort languages by proficiency
    const sortedLinguas = linguasData.linguas.sort((a, b) => {
        return proficiencyOrder[a.proficiencia] - proficiencyOrder[b.proficiencia];
    });

    return (
        <div>
            <h2>LÍNGUAS</h2>
            <div className="linguas-container">
                {sortedLinguas.map((lingua, index) => (
                    <div key={index} className="linguas-entry">
                        <h3>{lingua.lingua}</h3>
                        <p>Proficiência: {lingua.proficiencia}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Linguas;