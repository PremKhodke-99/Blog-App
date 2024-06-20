require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./db/dbConfig');
const userRoute = require('./routes/user.routes');
const blogRoute = require('./routes/blog.routes');

dbConnect();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', userRoute);
app.use('/blog', blogRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('server started', PORT);
});