const express = require("express");
const router = express.Router();
const itineraryController = require("../controllers/itinerary");
const { authenticationToken } = require("../authentication/authenticationToken")

// all routes here are starting with /itinerary as initialised in app.js
// ==== all itineraries ====
router.get('/getItineraries', authenticationToken, itineraryController.getItineraries);
// ==== itineraries of a User ====
router.get('/getItineraries/user/:id', authenticationToken, itineraryController.getUserItineraries);
// ==== one itinerary ====
router.get('/getItinerary/:id', authenticationToken, itineraryController.getItinerary);
// ==== add itinerary ====
router.post("/postItinerary", authenticationToken, itineraryController.postItinerary);
// ==== edit itinerary ====
router.patch("/putItinerary/:id", authenticationToken, itineraryController.patchItinerary);


module.exports = router;