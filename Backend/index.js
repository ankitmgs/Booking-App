const express = require("express");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const hotelsRoute = require("./routes/hotel");
const roomsRoute = require("./routes/rooms");
const usersRoute = require("./routes/users");
const connect  = require("./connection");
const app = express();
dotenv.config();

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

app.get("/", (req, res) => {
  return res.send("Root Request!");
});

app.listen(8800, () => {
  connect();
  console.log("Backend Started !!");
});
