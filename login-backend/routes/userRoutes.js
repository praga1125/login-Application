const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const userController = require("../controllers/userController");

// Protected Profile Route
router.get("/profile", authMiddleware, userController.getProfile);

module.exports = router;
