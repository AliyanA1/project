const express = require('express');
const app = express();
const server = process.env.PORT || 5000;

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('prac');
});

app.listen(server, () => {
    console.log(`Server is running on port ${server}`);
});