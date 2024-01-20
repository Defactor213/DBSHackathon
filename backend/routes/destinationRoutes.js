const express = require("express");
const destinationcontroller = require("../controllers/destination");
const router = express.Router();
const {authenticationToken} = require("../authentication/authenticationToken")


router.get('/viewall',authenticationToken, destinationcontroller.viewDestination);
router.post('/create',authenticationToken, destinationcontroller.createDestination);
router.delete('/delete/:destinationid',authenticationToken,destinationcontroller.deleteDestination);
router.patch('/update',authenticationToken,destinationcontroller.updateDestination);

module.exports = router;
