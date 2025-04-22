import { User } from '../models/user.js';
import { Book } from '../models/books.js';

export const addbook = async (req, res) => {
    const { googleId, title, authors, category, description, thumbnail } = req.body;

    try {
        // Check if book already exists in DB
        let book = await Book.findOne({ googleId });
        if (!book) {
            book = await Book.create({ googleId, title, authors, category, description, thumbnail });
        }

        // Add to user's favorite list (if not already there)
        const user = await User.findById(req.user.id);
        if (!user.favorites.includes(book._id)) {
            user.favorites.push(book._id);
            await user.save();
        }
        res.status(200).json({ message: 'Book added to your list.', book });
    }
    catch (error) {
        console.error(err);
        res.status(500).json({ error: 'Server error while adding book' });
    }
}