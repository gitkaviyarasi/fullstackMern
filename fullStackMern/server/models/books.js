import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    authors: [
        {
            type: String,
        }
    ],
    categories: [{
        type: String
    }],
    thumbnail: {
        type: String
    },
    description: {
        type: String
    }
},
    {

        timestamps: true,
    });

const Book = mongoose.model('Book', bookSchema);

export default Book;
