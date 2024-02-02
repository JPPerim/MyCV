import React from 'react';
import linguasData from './DATA/linguas.json';
import './linguas.css';
import ProgressBar from "@ramonak/react-progress-bar";
import Flag from 'react-world-flags';
const Linguas = () => {
    // Define the order of proficiency
    const proficiencyOrder = {
        "Nativo": 0,
        "Fluente": 1,
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
                        <h3>{lingua.lingua}</h3><Flag code={lingua.bandeira} height="15px"/>
                        
                        <ProgressBar bgColor="#8A2BE2" className="ProgressBar" completed={100/(proficiencyOrder[lingua.proficiencia]-0.75)} customLabel={lingua.proficiencia} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Linguas;