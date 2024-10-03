const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} = require("../controllers/user");
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require("../utils/verifyToken");

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("You are authenticated!");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user, you are logged in and you can delete you account!");
// });

// router.get("/checkadmin", verifyAdmin, (req, res, next) => {
//   res.send("hello admin, you are logged in and you can delete all account!");
// });

//UPDATE User
router.put("/:id", verifyUser, updateUser);
//DELETE Htel
router.delete("/:id", verifyUser, deleteUser);
//GET User By ID
router.get("/:id", verifyUser, getUser);
//GET ALL Users
router.get("/", verifyAdmin, getUsers);

module.exports = router;
