const router = require("express").Router();
const toneRoutes = require("./tone");


// Book routes
router.use("/tone", toneRoutes);

module.exports = router;