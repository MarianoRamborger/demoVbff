const express = require('express');
const Axios = require("axios")
const router = express.Router();
const envs = require("../config/envs")
const health = require("./health")

router.get('/get-data', async function(req, res, next) {
  const {lng,lat} = req.query
  
  try {
    const {status, data } = await Axios.get(`${envs.apis.openMeteo}/forecast?latitude=${lat}&longitude=${lng}` +
    `&current_weather=true` +
    `&timezone=auto` +
    `&daily=temperature_2m_max` +
    `&daily=temperature_2m_min` +
    `&daily=apparent_temperature_max` +
    `&daily=apparent_temperature_min` +
    `&daily=shortwave_radiation_sum` +
    `&daily=sunrise` +
    `&daily=sunset` +
    `&hourly=temperature_2m` + 
    `&hourly=apparent_temperature` + 
    `&hourly=shortwave_radiation` 

    )

    res.status(status).send(data)
  } catch (err) {
    try {
      res.status(err.response.status).send(err.response.data)
    } catch(err) {
      res.status(500).send(err)
    }
   
  }

});

router.use(health)

module.exports = router;
