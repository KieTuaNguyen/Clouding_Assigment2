const Toy = require('../models/Toy');
const { mongooseToObject } = require('../../util/mongoose');

class ToyController {

  // [GET] /toys/:toyID
  show(req, res, next) {
    Toy.findOne({ toyID: req.params.toyID })
      .then(toy => {
        res.render('toys/show', { toy: mongooseToObject(toy) });
      })
      .catch(next);
  }
}

module.exports = new ToyController();