//import { Request, Response } from 'express';

export const getGoogleBooks = async (req, res) => {
    const { keyword } = req.query;

    if (!keyword) {
        return res.statue(400).json({ message: "Please enter a searchterm" });
    }

    try {
        console.log("keyword get google book api")
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=${process.env.GOOGLE_BOOKS_API_KEY}`
        );
        const data = await response.json();
        if (!response.ok) {
            console.error('Google books API error:', await response.text());
            throw new Error("Invalid API response from Google books, check the network tab");
        }
        return res.json(data); // Send the fetched data as the response
    } catch (err) {
        console.error("Error fetching Google Books data:", err);
        console.log('subject:', subject);
        console.log('.......................');
        return {};
    }
};