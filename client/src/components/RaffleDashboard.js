import React from 'react';
import {Link} from 'react-router-dom';
const RaffleDashboard = () => {

  return (
    <div>
    <h2>Raffle Dashboard</h2>
    <p>Welcome to Emaily. In order to use this site, please buy some credits. As this is only a sample project, you can enter any valid email (test@gmail.com), this is the test credit card number: 4242 4242 4242 4242 with any valid date and any 3 digit CVV.</p>
    <p>Once you have some credits, you can create a survey by clicking on the red button below.</p>
    <p>Follow the form through, enter your own email as the recipient list, click send and maybe check your spam to see the email. <b>(Please note there are no spinners at the moment, and clicking the send button may appear not to work, but please wait 5 - 10 seconds before clicking again so you dont double up on sending emails.)</b></p>
    <p>This project is not yet complete. All that is left to do is to show a dashboard of your current surveys and the trackings of the votes. Coming very soon.</p>
      <div className="fixed-action-btn">
        <Link to="/raffles/new" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default RaffleDashboard;
