import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';

const router: Express = express();

// HTTP logging
router.use(morgan('dev'));

// request parser
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.use((req, res, next) => {
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

// invalid routes
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 3000;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));