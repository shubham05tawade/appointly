const express= require('express');
const userRoutes = require('./routes/User')
require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/user', userRoutes)

app.listen(PORT, () => {
    console.log('Connected to node server...')
})