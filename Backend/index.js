const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to Database");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Mongo DB Disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("Mongo DB Connected");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB Connection Error:", err);
});

app.use("/api/auth", authRoute);
app.get("/", (req, res) => {
  return res.send("Root Request!");
});

app.listen(8800, () => {
  connect();
  console.log("Backend Started !!");
});
