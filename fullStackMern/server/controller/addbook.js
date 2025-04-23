import User from '../models/user.js';
import Book from '../models/books.js';

export const addbook = async (req, res) => {
    const { googleId, title, authors, category, description, thumbnail } = req.body;

    try {
        // Check if book already exists in DB
        let book = await Book.findOne({ googleId });
        if (!book) {
            book = await Book.create({ googleId, title, authors, category, description, thumbnail });
        }
        //const user = req.user;
        // console.log(user)
        // Add to user's favorite list (if not already there)
        //const user = await User.findById(req.user.id);
        console.log(req.user);
        const user = await User.findOne({ username: req.user.username });
        console.log(user)
        if (!user.favorites.includes(book._id)) {
            user.favorites.push(book._id);
            await user.save();
        }
        res.status(200).json({ message: 'Book added to your list.', book });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error while adding book' });
    }
}

export const getfavbook = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.user.username }).populate('favorites');
        res.status(200).json(user.favorites);
    }


    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error while getting book' });
    }
}

export const deletefavbook = async (req, res) => {
    const bookId = req.params.id;
    try {
        // Find the user by username
        const user = await User.findOne({ username: req.user.username });
        if (!user) return res.status(404).json({ error: 'User not found' });

        // Remove the bookId from user's favorites
        user.favorites = user.favorites.filter(
            (favId) => favId.toString() !== bookId
        );

        await user.save();

        res.status(200).json({ message: 'Book removed from favorites' });

    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error while deleting a book' });
    }
}