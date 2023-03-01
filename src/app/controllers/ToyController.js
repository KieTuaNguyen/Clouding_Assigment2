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

  // [GET] /toys/create
  create(req, res, next) {
    res.render('toys/create');
  }

  // [POST] /toys/store
  store(req, res, next) {
    const formData = req.body;
    const toy = new Toy({
      toyID: Date.now(),
      categoryID: formData.categoryID,
      toyName: formData.toyName,
      toyPrice: formData.toyPrice,
      toyImage: formData.toyImage,
      toyDescription: formData.toyDescription
    });
    toy.save()
      .then(() => res.redirect('/'))
      .catch(next);
  }
}

module.exports = new ToyController();