const express = require("express");
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} = require("../controllers/hotel");
const { verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

//CREATE Hotel
router.post("/", verifyAdmin, createHotel);
//UPDATE Hotel
router.put("/:id", verifyAdmin, updateHotel);
//DELETE Htel
router.delete("/:id", verifyAdmin, deleteHotel);
//GET Hotel By ID
router.get("/:id", getHotel);
//GET ALL Hotels
router.get("/", getHotels);

module.exports = router;
