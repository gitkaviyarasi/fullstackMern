import express from 'express';

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

app.get('/api', (req, res) => {
    res.json({
        message: 'Hello World',
    });
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})