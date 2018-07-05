import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import RaffleNew from './raffles/RaffleNew';
import RaffleDashboard from './RaffleDashboard';


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Route exact path="/" component={Landing}/>
              <Route exact path="/surveys" component={Dashboard}/>
              <Route path="/surveys/new" component={SurveyNew}/>
              <Route exact path="/raffles" component={RaffleDashboard}/>
              <Route path="/raffles/new" component={RaffleNew}/>
            </div>
          </div>
        </BrowserRouter>
</div>
    );
  }
};

export default connect(null, actions)(App);
