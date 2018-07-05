const mongoose = require('mongoose');
const { Schema } = mongoose;

const raffleSchema = new Schema({
    name: String,
    description: String,
    numberOfTicketsAvailable: Number,
    numberOfTicketsSold: { type: Number, default: 0 },
    priceOfTicket: {type: Number, get: getPrice, set: setPrice },
    dateOpen: Date,
    dateClose: Date,
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
  });

  function getPrice(num){
      return (num/100).toFixed(2);
  }

  function setPrice(num){
      return num*100;
  }

mongoose.model('raffles', raffleSchema);
