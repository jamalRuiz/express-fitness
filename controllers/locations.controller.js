const express = require("express");
const locations = express.Router();
const locationData = require ("../models/location.model.js")
locations.get ("/", (req,res)=> {
    res.json(locationData)
})
module.exports = locations