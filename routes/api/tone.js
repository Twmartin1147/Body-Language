const router = require("express").Router();
const toneController = require("../../controllers/toneController");
console.log(toneController.toneInput)

// Matches with "/api/books"
router.route("/")
    .get(toneController.toneInput)


module.exports = router;