const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} = require("../controllers/user");

const router = express.Router();

//UPDATE User
router.put("/:id", updateUser);
//DELETE Htel
router.delete("/:id", deleteUser);
//GET User By ID
router.get("/:id", getUser);
//GET ALL Users
router.get("/", getUsers);

module.exports = router;
