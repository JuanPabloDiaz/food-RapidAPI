// Tutorial: https://www.youtube.com/watch?v=FcwfjMebjTU&t=0s

const PORT = 8000;

const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const dotenv = require("dotenv").config();
// run: npm install express cors node-fetch dotenv

const app = express();
