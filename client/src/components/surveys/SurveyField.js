// SurveyForm shows a form for a user to add input
import React from 'react';


export default ({ input, label }) => {

  return (
    <div>
    <label>{label}</label>
        <input {...input} />
    </div>
  );
};
