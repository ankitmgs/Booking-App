const mongoose = require("mongoose");
const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [{ number: Number, unavailbleDates: { type: [Date] } }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", RoomSchema);
