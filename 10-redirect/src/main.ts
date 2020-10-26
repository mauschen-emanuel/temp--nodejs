import http from 'http';
import { getApp } from './getApp';

const app = getApp();
const server = http.createServer(app);

server.listen(3000);
