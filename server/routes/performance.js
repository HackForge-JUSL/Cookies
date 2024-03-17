const { saveUserPerformance } = require("../controllers/performanceController");

const router = require("express").Router();

router.post("/", saveUserPerformance);

module.exports = router;
