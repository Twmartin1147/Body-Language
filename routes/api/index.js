const express = require("express");
const router = express.Router();
const toneController = require("../../controllers/toneController")




// Tone routes
//router.use("/tone", toneRoutes);
router.post("/api/tone", toneController.post )

module.exports = router;