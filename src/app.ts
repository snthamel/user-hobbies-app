import express, { Express } from 'express';
import morgan from 'morgan';
import swaggerUi from "swagger-ui-express";

import routes from './routes/index';
import CONFIG from './config/config';

export const app: Express = express();

// HTTP logging
if (CONFIG.APP != 'test') {
    app.use(morgan('dev'));
}

// request parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import swaggerSpec from './config/swagger';

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((req, res, next) => {
    // CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With, Content-Type, Accept, Authorization');
    // CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

import './models/index';

app.use('/', routes);

// invalid routes
app.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});