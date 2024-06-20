require('dotenv').config();
const mongoose = require('mongoose');
const MongoDB_URI = process.env.MONGODB_URI;

const dbConnect = () => {
    mongoose
        .connect(MongoDB_URI)
        .then(() => console.log('Database Connected'))
        .catch((error) => console.error('Unable to connect Database'));
}

module.exports = dbConnect;