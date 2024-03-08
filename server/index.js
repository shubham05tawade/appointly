const express= require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Welcome to appointly!!");
})

app.listen(PORT, () => {
    console.log('Connected to node server!!')
})