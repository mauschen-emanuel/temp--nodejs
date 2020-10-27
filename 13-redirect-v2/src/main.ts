import { flaschenpost } from 'flaschenpost';
import { getApp } from './getApp';
import http from 'http';

const app = getApp();
const server = http.createServer(app);

server.listen(3000);
const logger = flaschenpost.getLogger();

logger.info('Service available at: http://localhost:3000');
