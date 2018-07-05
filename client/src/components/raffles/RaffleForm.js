import _ from 'lodash';
import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import formFields from './formFields';
import RaffleField from './RaffleField';
import { Link } from 'react-router-dom';

class RaffleForm extends Component{
  renderFields(){
    return _.map(formFields, ({ label, name }) => {
         return(
           <Field key={name} label={label} type="text" name={name} component={RaffleField} />
        );
      }
    );
  }


  render(){
    return (
        <div>
        <h4>Create a new raffle</h4>
          <form
            onSubmit={this.props.handleSubmit(this.props.onRaffleSubmit)}
          >
            {this.renderFields()}
            <Link to="/raffles" className="red btn-flat left white-text">
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
  form: 'raffleForm',
  destroyOnUnmount: false
})(RaffleForm);
