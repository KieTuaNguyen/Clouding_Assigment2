const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 7703;
const route = require('./routes/index');
const connectDB = require('./config/connectDB');
const methodOverride = require('method-override');

// Connect to DB
connectDB();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(methodOverride('_method'));

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('.hbs', engine({
  extname: '.hbs'
}))
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Route init
route(app);

app.listen(PORT, () => {
  console.log(`Our app is running at http://localhost:${PORT}`);
});