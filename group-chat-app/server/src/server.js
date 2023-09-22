import express from 'express';
import http from 'http';
import cors from 'cors';

export const app = express();
// Cors whitelisting
app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json());
export const server = http.createServer(app);

// export default server;
