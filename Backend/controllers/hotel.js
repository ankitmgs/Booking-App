const Hotel = require("../models/Hotel");

const createHotel = async (req, res, next) => {
  try {
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

    // Validation checks
    const requiredFields = {
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
    };

    for (const [key, value] of Object.entries(requiredFields)) {
      if (!value) {
        return res.status(400).json({
          success: false,
          status: 400,
          message: `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`,
        });
      }
    }

    // Check if hotel already exists
    const hotelExist = await Hotel.findOne({ $or: [{ name }, { email }] });
    if (hotelExist) {
      return res.status(409).json({
        success: false,
        status: 409,
        message: "A hotel with the same name or email already exists.",
      });
    }

    // Create new hotel
    const newHotel = new Hotel(req.body);
    const savedHotel = await newHotel.save();

    return res.status(201).json({
      success: true,
      status: 201,
      message: "Hotel has been created successfully.",
      result: savedHotel,
    });
  } catch (err) {
    next(err);
  }
};
const updateHotel = async (req, res, next) => {
  try {
    const { email, name } = req.body;
    const hotelExist = await Hotel.findOne({ $or: [{ name }, { email }] });

    if (hotelExist) {
      return res.status(400).json({
        success: false,
        status: 409,
        message: "A hotel with the same name or email already exists.",
      });
    }

    const updateData = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      status: 200,
      message: "Hotel has been updated.",
      result: updateData,
    });
  } catch (err) {
    next(err);
  }
};
const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: true,
      success: 200,
      message: "Hotel has been Deleted",
    });
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
  try {
    let { max, min, limit, ...filters } = req.query;

    // Convert values to numbers
    const minPrice = Number(min) || 1;
    const maxPrice = Number(max) || 999;
    const limitCount = Number(limit) || 10;

    const hotels = await Hotel.find({
      ...filters,
      cheapestPrice: { $gte: minPrice, $lte: maxPrice }, // Fixed price filter
    })
      .limit(limitCount)
      .exec();

    if (hotels.length === 0) {
      return res.status(200).json({
        success: true,
        status: 200,
        message: "No hotels found matching the criteria.",
        count: 0,
        result: [],
      });
    }

    res.status(200).json({
      success: true,
      status: 200,
      message: "Hotels retrieved successfully.",
      count: hotels.length,
      result: hotels,
    });
  } catch (error) {
    next(error);
  }
};
const countByCity = async (req, res, next) => {
  try {
    if (!req.query.cities) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Cities query parameter is required.",
      });
    }

    const cities = req.query.cities.split(",");

    const list = await Promise.all(
      cities.map(async (city) => {
        const count = await Hotel.countDocuments({ city: city });
        return { city, count };
      })
    );

    return res.status(200).json({
      success: true,
      status: 200,
      message: "Hotel count retrieved successfully.",
      result: list,
    });
  } catch (err) {
    next(err);
  }
};


const countByType = async (req, res, next) => {
  try {
    const types = ["hotel", "apartment", "resorts", "villas", "cabins"];

    const counts = await Promise.all(
      types.map(async (type) => {
        const count = await Hotel.countDocuments({ type });
        return { type, count };
      })
    );

    return res.status(200).json({
      success: true,
      status: 200,
      message: "Hotel counts by type retrieved successfully.",
      result: counts,
    });
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
