require('dotenv').config();
const express = require("express");
const app = express();
const connectTODB = require('./database/db')

//connect to db
connectTODB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));