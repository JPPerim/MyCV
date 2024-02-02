import React from 'react';
import educationData from './DATA/educationAndCourses.json';
import './education.css'; // Make sure to import your CSS file

const Education = () => {
  return (
    <div>
      <h2>FORMAÇÃO ACADÊMICA E CURSOS</h2>
      <div className="education-grid">
        {educationData.educationAndCourses.map((course, index) => (
          <div key={index} className="education-entry">
            <h3>{course.field}</h3>
            <p><strong>Instituição:</strong> {course.institution}</p>
            {course.location && <p><strong>Local:</strong> {course.location}</p>}
            <p><strong>Ano:</strong> {course.year || course.completionDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
