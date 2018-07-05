//SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions/raffleActions';
import {withRouter} from 'react-router-dom';

const RaffleFormReview = ({ onCancel, formValues, submitRaffle, history }) => {
console.log(submitRaffle);
const fieldList = _.map(formFields, ({label, name}) => {
       return(
         <div key={name}>
          <label>{label}</label>
          <div>
            {formValues[name]}
          </div>
         </div>
      );
    });


  return (
    <div>
      <h5>Please confirm your entries</h5>
      {fieldList}
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>

      <button onClick={() => {submitRaffle(formValues, history)}} className="green white-text btn-flat right">
        Submit Raffle
        <i className="material-icons right">add</i>
      </button>
    </div>
  );
}


function mapStateToProps(state) {
  return {
    formValues: state.form.raffleForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(RaffleFormReview));
