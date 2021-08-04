import http from 'http';
import CONFIG from './config/config';

import { app } from './app';

const httpServer = http.createServer(app);
const PORT = CONFIG.PORT;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
