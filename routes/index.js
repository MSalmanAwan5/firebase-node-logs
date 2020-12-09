var express = require("express");
const { logger } = require("firebase-functions");
const { showLogs } = require("../functions");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  showLogs(req, res);
});

module.exports = router;
