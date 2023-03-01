const siteRouter = require('./site');

function route(app) {

  // Các method chính:
  // Create = Post 
  // Read = Get
  // Update = Put
  // Delete = Delete

  app.use('/', siteRouter);

}

module.exports = route;