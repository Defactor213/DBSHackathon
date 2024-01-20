const express = require("express");
const router = express.Router();
const itineraryController = require("../controllers/itinerary")

// all routes here are starting with /itinerary as initialised in app.js
// ==== all itineraries ====
router.get('/getItineraries', itineraryController.getItineraries);
// ==== itineraries of a User ====
router.get('/getItineraries/user/:id', itineraryController.getUserItineraries);
// ==== one itinerary ====
router.get('/getItinerary/:id', itineraryController.getItinerary);
// ==== add itinerary ====
router.post("/postItinerary", itineraryController.postItinerary);

module.exports = router;