import express from 'express';
import routes from './routes/authroutes.js';

import db from './config.js';
await db();
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// turn on routes
app.use(routes);

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});