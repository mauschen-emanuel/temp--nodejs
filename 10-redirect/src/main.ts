import { getApp } from './getApp';
import http from 'http';

const app = getApp();
const server = http.createServer(app);

server.listen(3000);
