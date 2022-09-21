const express = require('express');
const Axios = require("axios")
const router = express.Router();
const envs = require("../config/envs")
const health = require("./health")

router.get('/get-data', async function(req, res, next) {
  const {lng,lat} = req.query
  
  try {
    const {status, data } = await Axios.get(`${envs.apis.openMeteo}/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m&current_weather=true`)

    res.status(status).send(data)
  } catch (err) {
   
    console.log(err)
    res.status(500).send(err)
  }

});

router.use(health)

module.exports = router;
