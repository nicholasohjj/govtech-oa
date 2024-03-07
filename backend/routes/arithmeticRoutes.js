const express = require("express")
const router = express.Router();
const arithmeticController = require("../controllers/arithmeticController")

router.get("/", arithmeticController.test )
router.post("/add", arithmeticController.addOperation )


module.exports = router;