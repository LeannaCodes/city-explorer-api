"use strict;" 

const express = require("express");
require("dotenv").config();
const cors = require("cors");
const axios = require("axios");
const weatherData = require("./data/weather.json");


const app = express();

app.use(cors()); //middleware

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
    console.log(response.data);
    response.json(weatherData);
  });

app.get("/weather", (request, response) => {
    const lat = request.query.lat;
    const lon = request.query.lon;
    const searchQuery = request.query.searchQuery;
    const found = weatherData.find((weatherItem) => {
        console.log(weatherData.includes('lat'));

    }) 

    
    response.json();
  });
  

  app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  });