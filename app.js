const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Hello from Express JS API');
});

app.listen(80, () => {
    console.log('App is running on port 80');
});