// Tutorial: https://www.youtube.com/watch?v=FcwfjMebjTU&t=0s

import express from "express";
import cors from "cors";
import { config as dotenvConfig } from "dotenv";
import nodeFetch from "node-fetch";

const PORT = 8000;

// run: npm install express cors node-fetch dotenv

const app = express();

let fetch = nodeFetch;

dotenvConfig();

app.get("/", (req, res) => {
  res.json("Hello World!");
});

// app.get("/", (req, res) => {
//   res.json("Hello World!");
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
