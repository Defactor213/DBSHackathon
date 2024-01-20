const express = require("express");
const router = express.Router();
const itineraryController = require("../controllers/itinerary");
const { authenticationToken } = require("../authentication/authenticationToken")

// all routes here are starting with /itinerary as initialised in app.js
// ==== itineraries of a User ====
router.get('/getItineraries/user', authenticationToken, itineraryController.getUserItineraries);
// ==== one itinerary ====
router.get('/getItinerary/:id', authenticationToken, itineraryController.getItinerary);
// ==== add itinerary ====
router.post("/postItinerary", authenticationToken, itineraryController.postItinerary);
// ==== edit itinerary ====
router.patch("/patchItinerary/:id", authenticationToken, itineraryController.patchItinerary);
// ==== delete itinerary ====
router.delete("/deleteItinerary/:id", authenticationToken, itineraryController.deleteItinerary);

module.exports = router;