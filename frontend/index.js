const express = require('express');
const path = require('path');
const axios =require('axios');

const app= express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'templates')));

app.get('/api/frontend', async (req , res) => {
    try{
        const response= await axios.get('http://localhost:5000/api');
        res.send(`<h1>Flask Says: ${response.data.message}</h1>`);

    }
    catch(error){
        res.status(500).send('error fetching from flask backend')}  
});

app.listen(PORT, () => {
    console.log(`Express frontend running on http://localhost:${PORT}`);
});