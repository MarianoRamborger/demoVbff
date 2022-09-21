const express = require('express');
const router = express.Router();
const envs = require("../config/envs")
const health = require("./health")

router.get('/', function(req, res, next) {
  res.status(200).send(envs.server.test)
});

router.use(health)

module.exports = router;
