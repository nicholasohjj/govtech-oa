const express = require("express")
const router = express.Router();
const arithmeticController = require("../controllers/arithmeticController")

router.get("/add", arithmeticController.test )


module.exports = router;