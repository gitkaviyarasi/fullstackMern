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

    const passwordIsvalid = await bcrypt.compare(password, User.password);
    if (!passwordIsvalid) {
        return res.status(401).json({ message: 'Authentication failed' });

    }

    const secretKey = process.env.JWT_SECRET_KEY;

    const token = jwt.sign({ username }, secretKey, { expiresIn: '1hr' })
    return res.json({ token });
}

const router = Router();
router.post('/login', login);

export default router;