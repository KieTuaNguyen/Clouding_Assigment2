const Toy = require('../models/Toy');

const getHomePage = (req, res, next) => {
  res.render('index', { title: 'Home' });
};

module.exports = {
  getHomePage
}