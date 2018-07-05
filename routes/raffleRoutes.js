const mongoose = require('mongoose');
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");


const Raffle = mongoose.model('raffles');

module.exports = app => {
  app.get('/api/raffles', (req, res) => {
    Raffle.find({}, function(err, raffles) {
     var raffleMap = {};

     raffles.forEach(function(raffle) {
       raffleMap[raffle._id] = raffle;
     });

     res.send(raffleMap);
   });
  });


  app.post('/api/raffles', requireLogin,
  async (req, res) => {
    console.log(req);
    const { name, description, numberOfTicketsAvailable } = req.body;

    const raffle = new Raffle({
      name,
      description,
      numberOfTicketsAvailable,
      _user: req.user.id,
      dateOpen: Date.now(),
      dateClose: null
    });

    try{
      await raffle.save();
      res.send(user);
    }
    catch(err) {
        res.status(422).send(err);
    }

  });
};
