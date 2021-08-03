import express from 'express';
const router = express.Router();

import usersRoutes from './users.routes';

router.use('/users', usersRoutes);

export = router;
