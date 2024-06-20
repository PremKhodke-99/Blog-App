const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/', (req, res) => {
    res.send('Hello')
});

app.listen(5000, () => {
    console.log('server started');
})