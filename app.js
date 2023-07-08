const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.listen(3000, () => {
    console.log('hello 3000');
});

app.get('/', async (req, res) => {
    res.render('home');
});

app.get('/quote', async (req, res) => {
    const response = await fetch('https://api.quotable.io/random');
    var quote = await response.json();
    res.render('quote', { quote });
});


app.get('/joke', async (req, res) => {
    const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
    var joke = await response.json();
    res.render('joke', { joke });
});

app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});