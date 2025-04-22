import express from 'express';
import routes from './routes/index.js';
import dotenv from 'dotenv';
import db from './config/connection.js';
dotenv.config();

async function startServer() {
    await db();

    const PORT = process.env.PORT || 3001;
    //const PORT = 3001;
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // turn on routes
    app.use(routes);

    app.listen(PORT, () => {
        console.log(`API server running on the port ${PORT}!`)
    })
}

startServer();
