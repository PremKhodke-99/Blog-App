const express = require('express');
const cors = require('cors');
const dbConnect = require('./db/dbConfig');

dbConnect();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', (req, res) => {
    res.send('Hello')
});

app.listen(5000, () => {
    console.log('server started', 5000);
});