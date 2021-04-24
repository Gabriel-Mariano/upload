import express from 'express';
import routes from './routes';
import morgan from 'morgan';

const app = express();
const port = 3388;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(morgan('dev'));
app.use(routes);

app.listen(port,()=>{
    console.log("Server is running ... ");
});