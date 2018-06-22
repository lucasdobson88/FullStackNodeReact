// SurveyForm shows a form for a user to add input
import React from 'react';


export default ({ input, label, meta: { error, touched } }) => {

  return (
    <div>
    <label>{label}</label>
        <input {...input} style={{ marginBottom: '5px' }}/>
        <div className="red-text" style={{marginBottom: '20px'}}>
          {touched && error}
        </div>
    </div>
  );
};
