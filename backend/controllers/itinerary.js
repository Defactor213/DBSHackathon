const { pool } = require('../database/db');
const util = require('util');

const poolQuery = util.promisify(pool.query).bind(pool);

// get all itineraries in database
const getItineraries = async (req, res) => {
    try {
        const data = await poolQuery(
            `SELECT *  from itinerary`
        );
        res.status(200).json({
            itinerary: data,
        });
    } catch (err) {
        res.status(500).json({
            message: err,
        });
    }
};

// get all itineraries of a specific user in database
const getUserItineraries = async (req, res) => {
    try {
        const userId = req.params.id
        const data = await poolQuery(
            `SELECT *  from itinerary WHERE user_id = ?`, [userId]
        );
        res.status(200).json({
            itinerary: data,
        });
    } catch (err) {
        res.status(500).json({
            message: err,
        });
    }
};

// get one itinerary using id in database
const getItinerary = async (req, res) => {
    try {
        const itineraryId = req.params.id;
        const data = await poolQuery(
            `SELECT *  from itinerary WHERE id = ?`, [itineraryId]
        );
        res.status(200).json({
            itinerary: data,
        });
    } catch (err) {
        res.status(500).json({
            message: err,
        });
    }
};

// post itinerary
const postItinerary = async (req, res) => {
    try {
        const user_id = req.user.id;
        const {
            country_id,
            budget,
            title
        } = req.body;

        console.log([user_id, country_id, budget, title])

        await poolQuery(
            `INSERT INTO itinerary (user_id, country_id, budget, title)
              VALUES (?, ?, ?, ?)`
              ,
            [user_id, country_id, budget, title]
        );
        res.status(202).json({
            message: "Itinerary Created",
        });
    } catch (err) {
        res.status(500).json({
            message: err,
        });
    }
};

// patch itinerary
const patchItinerary = async (req, res) => {
    try {
        const itineraryId = req.params.id;
        const {
            country_id,
            budget,
            title
        } = req.body;

        console.log([country_id, budget, title])

        await poolQuery(
            `UPDATE itinerary
            SET country_id = ?, budget = ?, title = ?
            WHERE id = ?;`
              ,
            [country_id, budget, title, itineraryId]
        );
        res.status(202).json({
            message: "Itinerary Edited",
        });
    } catch (err) {
        res.status(500).json({
            message: err,
        });
    }
};

module.exports = {
    getItineraries,
    getUserItineraries,
    getItinerary,
    postItinerary,
    patchItinerary
};