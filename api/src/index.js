require('dotenv').config();

const userController = require('./user/user.controller');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

userController.connect();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/users', require('./route/users.route'));

app.listen(app.get('port'), () => {

  console.log(`App listening on port ${app.get('port')}`);

});
