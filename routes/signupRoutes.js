import express from "express";
const router = express.Router();

//array to temp store data
let signups = [];

//display signup form
//get method
router.get('/signup', (req, res) => {
    res.send (`
        <h1>Sign Up</h1>
        <form method = "POST" action = "/signup">
    <label for = "name"> Name:</label>
    <input type = "text" id = "name" name = "name" required ><br></br>
    <label for = "email">Email:</label>
    <input type = "email" id = "email" name = "email" required><br></br>
    <button type = "submit">Sign Up</button>
    </form>`);
});

//handle signup form submission
//post method
router.post('/signup', (req, res) => {
    const {name, email} = req.body;
    if (!name || !email) {
        return res.status(400).send('Name and email required.');
    }

//add signup to in memory storage
    signups.push({name, email});
    res.send('Thank you for singing up, ${name}!');
});

//display all signups (for testing)
router.get('/signup', (req, res) => {
    res.json(signups);
});

//makes file avaible for import to app.js
export default router;