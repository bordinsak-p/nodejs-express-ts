import express from 'express';
import morgan from 'morgan';
import MessagesConstants from './constants/messages';
import ValiableConstants from './constants/valiables';
import db from './db';
import Helper from './helpers/helpers';
import router from './routes/index';

const app = express();
const port = 8080;

/**
 * set up middleware
 * allow the app to accept JSON on the body
 * */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * set uuid track for each request
 * set up morgan log all requests to the console
 */
morgan.token('track', () => new Helper().generateUuid("splits"));
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :track'));

// use the router
app.use(ValiableConstants.API_URL, router);

// start the server
app.listen(port, () => {
    console.log(MessagesConstants.SERVER_IS_RUNNING.replace('{port}', port.toString()));
    db;
});