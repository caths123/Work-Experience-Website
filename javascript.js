console.log("My name is Liza")

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
app.get('/dog', (req, res) => {
    res.sendFile(path.join(__dirname,'dog.jpg'));
});

app.use(express.json('/static', 
    express.static(path.join(__dirname, 'Static Files'))))

app.get('/hello', (req, res) => {
        res.send('Hello World');

    ('Content-Type', 'text/html');
    res.status(200).send("<h1>Hello GFG Learner!</h1>");
    res.send("Welcome to the website!");
});

app.post('/', (req, res) =>{
    const {name} = req.body;
    
    res.send(`Welcome ${name}`);
})
app.listen(PORT, (error) => {
    if(!error)
      console.log("Server is Successfully Running, and App is listening on port " + PORT)

    else 
        console.log("Error occurred, server can't start", error);
    }
);
