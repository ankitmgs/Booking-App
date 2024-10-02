const express = require("express");
const { createHotel, updateHotel, deleteHotel, getHotel, getHotels } = require("../controllers/hotel");

const router = express.Router();

//CREATE Hotel
router.post("/", createHotel);
//UPDATE Hotel
router.put("/:id", updateHotel);
//DELETE Htel
router.delete("/:id", deleteHotel);
//GET Hotel By ID
router.get("/:id", getHotel);
//GET ALL Hotels
router.get("/", getHotels);

module.exports = router;
