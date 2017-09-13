const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const exphbs = require('express-handlebars');
const controllers = require('./controllers/index');
const helpers = require('./views/helpers/index');
const app = express();
const error = require('./500');
const lost = require('./404');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers: helpers
  })
);

app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);
app.use(function (req, res, next) {
  res.status(404).send(lost);
});
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send(error)
})
module.exports = app;
