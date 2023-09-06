require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to Sample NodeJS Backend");
});

app.use("/users", userRoutes);

mongoose
  .connect("<Provide your mongodb driver-connect url here>")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(4000, () => {
      console.log(`Server is running on port 4000`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
