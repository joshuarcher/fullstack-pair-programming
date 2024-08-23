import express, { Request, Response } from 'express';

const app = express();
const port = 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
