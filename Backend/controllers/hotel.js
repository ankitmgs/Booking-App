const Hotel = require("../models/Hotel");

const createHotel = async (req, res, next) => {
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
  } catch (err) {
    next(err);
  }
};
const updateHotel = async (req, res, next) => {
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
    next(err);
  }
};
const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been Deleted");
  } catch (err) {
    next(err);
  }
};
const getHotel = async (req, res, next) => {
  try {
    const hotelData = await Hotel.findById(req.params.id);
    res.status(200).json(hotelData);
  } catch (err) {
    next(err);
  }
};
const getHotels = async (req, res, next) => {
  const { max, min, limit, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(limit);
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};

const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    return res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortsCount = await Hotel.countDocuments({ type: "resorts" });
    const villasCount = await Hotel.countDocuments({ type: "villas" });
    const cabinsCount = await Hotel.countDocuments({ type: "cabins" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartment", count: apartmentCount },
      { type: "resorts", count: resortsCount },
      { type: "villas", count: villasCount },
      { type: "cabins", count: cabinsCount },
    ]);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
  countByCity,
  countByType,
};
