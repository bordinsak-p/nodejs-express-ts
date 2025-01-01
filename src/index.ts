import express from 'express';
import morgan from 'morgan';
import MessagesConstants from './constants/messages';
import ValiableConstants from './constants/valiables';
import db from './db';
import router from './routes/index';

const app = express();
const port = 8080;

/**
 * set up middleware
 * allow the app to accept JSON on the body
 * set up morgan log all requests to the console
 * */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// use the router
app.use(ValiableConstants.API_URL, router);

// start the server
app.listen(port, () => {
    console.log(MessagesConstants.SERVER_IS_RUNNING.replace('{port}', port.toString()));
    db;
});