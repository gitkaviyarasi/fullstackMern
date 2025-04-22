import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('DB connected');
        return mongoose.connection;
    }
    catch (error) {
        console.error("Database Connection error:", error);
        throw new Error('Database connection failed');
    }
}

export default db;