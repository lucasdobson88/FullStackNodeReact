// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';

const FIELDS = [
  { label: "Suvery Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Email Body", name: "body" },
  { label: "Recipient List", name: "emails" },
];

class SurveyForm extends Component{
  renderFields(){
    return _.map(FIELDS, ({ label, name }) => {
         return(
           <Field key={name} label={label} type="text" name={name} component={SurveyField} />
        );
      }
    );
  }


  render(){
    return (
        <div>
          <form
            onSubmit={this.props.handleSubmit(values => console.log(values))}
          >
            {this.renderFields()}
            <Link to="/surveys" className="red btn-flat left white-text">
              <i className="material-icons right">close</i>
              Cancel
            </Link>
            <button className="teal btn-flat right white-text" type="submit">
              <i className="material-icons right">done</i>
              Next
            </button>
          </form>
        </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
