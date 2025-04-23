import { Router } from 'express';
import User from '../models/user.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import dotenv from 'dotenv';
dotenv.config();

export const login = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
        return res.status(401).json({ message: 'User not found' });
    }

    const passwordIsvalid = await bcrypt.compare(password, user.password);
    if (!passwordIsvalid) {
        console.log("password,", password)
        return res.status(401).json({ message: 'Authentication failed' });

    }

    const secretKey = process.env.JWT_SECRET_KEY;

    const token = jwt.sign({ username }, secretKey, { expiresIn: '24hr' })
    return res.json({ token });
}

export const addUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.create(req.body)

        const secretKey = process.env.JWT_SECRET_KEY;
        const token = jwt.sign({ username }, secretKey, { expiresIn: '24hr' })
        return res.json({ token });
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }

}
const router = Router();
router.post('/login', login);
router.post('/addUser', addUser);

export default router;