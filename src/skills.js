import React from "react";
import skillsData from './DATA/skills.json';
import './skills.css';
const Skills = () =>{
    return (
        <div>
            <h2>FERRAMENTAS E APLICATIVOS</h2>
            <div  className="skills-container">
                {skillsData.skills.map((skillCategory, index) => (
                    <div key={index} className="category-container">
                        <h3>{skillCategory.category}</h3>
                        <ul>
                            {skillCategory.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    </div>
            ))}
            </div>
        </div>
    );
};

export default Skills;