import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
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
    category: {
        type: String
    },
    publisher: {
        type: String
    },
    publishedDate: {
        type: Date,
    },
    description: {
        type: String
    }
},
    {

        timestamps: true,
    });

const Book = model('Book', bookSchema);
export default Book;
