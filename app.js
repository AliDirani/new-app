const express = require('express');
const app = express();
const port = 3000;

// Hello World route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Health check route
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
