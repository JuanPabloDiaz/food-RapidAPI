// Tutorial: https://www.youtube.com/watch?v=FcwfjMebjTU&t=0s

import express from "express";
import cors from "cors";
import { config as dotenvConfig } from "dotenv";
import nodeFetch from "node-fetch";

const PORT = 8000;

// run: npm install express cors node-fetch dotenv

const app = express();

app.use(cors());

let fetch = nodeFetch;

dotenvConfig();

app.get("/", (req, res) => {
  res.json("Server running on port 8000! Check port * 8000/backend * for data");
});

app.get("/backend", (req, res) => {
  // console.log("req: ", req); // <-- request:  IncomingMessage { ... }
  // console.log("req.query: ", req.query); // <-- query:  [Object: null prototype] {}

  // options is required ~ Rapid API
  const options = {
    method: "GET",
    headers: {
      // "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY, // -->> Default API key from Rapid API. imported for Vite.
      "X-RapidAPI-Key": process.env.RAPID_API_KEY, // -->> To access env variables. In Node.js, env variables are accessed via process.env, not import.meta.env.
      "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
    },
  };

  // const url = `https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoint}`;  // IMDb API
  const url =
    "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free";

  // async function:
  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result.hints);
      // console.log(result.hints.food);
      // setContainer(result.hints); // setContainer is now an array of objects that contains the data from the API
      res.json(result.hints); // send data to frontend
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
