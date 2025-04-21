import express from 'express';
import routes from './routes';

import db from './config/connection.js';
await db();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`API server running on the port ${PORT}!`)
})