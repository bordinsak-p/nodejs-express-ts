import express, { Request, Response } from 'express';
import morgan from 'morgan';
import { Messages } from './constants/message';

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
    res.json({ ...req.body });
});

app.listen(port, () => {
    console.log(Messages.SERVER_IS_RUNNING.replace('{port}', port.toString()));
});