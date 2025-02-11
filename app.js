const express = require('express');
const app = express();

//route to home page
//headers automatically set and written
app.get('/', (req, res) => {
    res.send('Home page.\n');
});

//route for about page
//headers automatically set and written
app.get('/about', (req, res) => {
    res.send('What do you want to know?\n');
}); 

app.get('/me', (req, res) => {
    res.send('My name is Joshua Emmanuel.\n');
});

app.get('/class', (req, res) => {
    res.send('GUI Programming.\n');
});

app.get('/school', (req, res) => {
    res.send('University of Belize./n');
});

//catch-all route for 404 errors. our first taste of middleware
app.use((req, res) => {
    res.status(404).send('404 Not Found.\n');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});