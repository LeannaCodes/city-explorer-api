"use strict;";

// importing the express module
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const axios = require("axios");
const weatherData = require("./data/weather.json");

// create a new express application
const app = express();

// middleware allows other people to use your API without permission. This is a sercurity feature.
app.use(cors());

// specify port
const PORT = process.env.PORT || 3000;

// endpoint that has parameter in the path
//localhost:300/weather/lat
app.get("/weather", (request, response) => {
  console.log(response.data);
  response.json(weatherData);
});

// endpoint that has parameter in the path
//localhost:300/weather/lat
app.get("/weather", (request, response) => {
  try {
    const weatherArray = city.data.map(day => new Forecast(day));
    response.status(200).send(weatherArray);
    const lat = request.query.lat;
    const lon = request.query.lon;
    const searchQuery = request.query.searchQuery;
    const weatherItem = weatherData.find((weather) => {
      console.log(weatherData.includes("lat"));
      console.log(weatherData.includes("lon"));
      return (
        weather.lat === lat &&
        weather.lon === lon &&
        weather.city_name === searchQuery
    
      );
    });
  } catch (error) {
    console.log("error from API", err);
    response.status(500).send("server error");
  }
});

function Forecast(day) {
    this.date = day.valid_date;
    this.description = day.weather.description;
}

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
