//  Express app that serves the frontend of the Ares application.

var express = require('express');
var app = express();
app.set("view engine", "ejs");
const URL = 'http://localhost:3000';
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

app.get("/", async function(req, res) {
    const options = {
        method: 'GET',
        

    
    };
    fetch(URL, options)
    .then(response => response.json())
    .then(data => {
        res.render("index", { data: data });
    });

    try {
        let response = await fetch(URL, options);
        response = await response.json();
        res.render("index", { data: response });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching data from the backend.");
    }   

});

app.listen(3000, function() {
    console.log("Frontend server is running on port 3000");
});

