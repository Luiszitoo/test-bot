import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

// routes
import usersRoute from './route/users.route';

dotenv.config();

const app : express.Application = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/users', usersRoute);

app.listen(app.get('port'));