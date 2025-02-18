// const express = require('express');


import express from 'express';
import signupRoutesfrom './routes/signupRoutes.js';
const app = express();

//middleware

app.use(express.urlencoded ({extended: true}));

const loggingMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  };
  
  app.use(loggingMiddleware);
  // Use the signup routes
  app.use('/', signupRoutes);
  
  app.use((req, res) => {
       res.status(404).send('Oops! The page you are looking for does not exist.');
  });
  

app.use((req, res, next) => {
    const timestamp= new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();
});

const adminMiddleware = (req, res, next) => {
    if (req.headers["x-admin"] === "true") {
        console.log("Access granted to /pay\n.");
        next();
    }
    else {
        console.log("Access denied to /pay.");
        res.status(403).send("403 Forbidden: Admin access required.\n");
    }
};

//catch-all route for 404 errors. our first taste of middleware
app.use((req, res) => {
    res.status(404).send('404 Not Found.\n');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

