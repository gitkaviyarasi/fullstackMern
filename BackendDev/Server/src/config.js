import mongoose from 'mongoose';
//import dotenv from 'dotenv';

//dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/product';

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/product');
        console.log('Product Database connected.');
        return mongoose.connection;
    } catch (error) {
        console.error('Database connection error:', error);
        throw new Error('Database connection failed.');
    }
}

export default db;