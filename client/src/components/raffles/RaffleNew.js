import React from 'react';
import {reduxForm} from 'redux-form';
import RaffleForm from './RaffleForm';
import RaffleFormReview from './RaffleFormReview';

class RaffleNew extends React.Component {
  state = { showFormReview: false };

  renderContent() {
    if(this.state.showFormReview){
      return <RaffleFormReview
        onCancel={() => this.setState({ showFormReview: false })}
      />
    }
    return <RaffleForm onRaffleSubmit={() => this.setState({ showFormReview: true })}/>
  }

  render(){
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'raffleForm'
})(RaffleNew);
