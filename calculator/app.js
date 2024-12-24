const express = require('express');
const app = express();
const server = process.env.PORT || 5000;
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('prac');
});

app.listen(server, () => {
    console.log(`Server is running on port ${server}`);
});