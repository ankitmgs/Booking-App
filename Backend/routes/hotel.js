const express = require("express");
const Hotel = require("../models/Hotel");

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
  const {
    name,
    city,
    address,
    distance,
    rating,
    rooms,
    desc,
    cheapestPrice,
    phone,
    email,
  } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required." });
  }
  if (!city) {
    return res.status(400).json({ error: "City is required." });
  }
  if (!address) {
    return res.status(400).json({ error: "Address is required." });
  }
  if (!distance) {
    return res.status(400).json({ error: "Distance is required." });
  }
  if (!rating) {
    return res.status(400).json({ error: "Rating is required." });
  }
  if (!rooms) {
    return res.status(400).json({ error: "Rooms are required." });
  }
  if (!desc) {
    return res.status(400).json({ error: "Description is required." });
  }
  if (!cheapestPrice) {
    return res.status(400).json({ error: "Cheapest price is required." });
  }
  if (!phone) {
    return res.status(400).json({ error: "Phone is required." });
  }
  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }

  const hotelExist = await Hotel.findOne({ $or: [{ name }, { email }] });
  if (hotelExist) {
    return res
      .status(400)
      .json("A hotel with the same name or email already exists.");
  }
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    return res.status(200).json(savedHotel);
  } catch (error) {
    console.log("Error in adding hotel: ", error);
    return res.status(500).json(error);
  }
});
//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const { email, name } = req.body;
    const hotelExist = await Hotel.findOne({ $or: [{ name }, { email }] });

    if (hotelExist) {
      return res
        .status(400)
        .json("A hotel with the same name or email already exists.");
    }

    const updateData = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updateData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET
router.get("/:id", async (req, res) => {
  try {
    const hotelData = await Hotel.findById(req.params.id);
    res.status(200).json(hotelData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET ALL
router.get("/", async (req, res) => {
  try {
    const hotels = await Hotel.find();
    return res.status(200).json(hotels);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
