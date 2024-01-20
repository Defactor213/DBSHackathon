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

const postItinerary = async (req, res) => {
    try {
        // const { country, user, budget, title } = req.body;

        // const [{ insertId }] = await poolQuery(
        //     `INSERT INTO users (name, address, country) 
        //       VALUES (?, ?,?)`,
        //     [name, address, country]
        // );
        // res.status(202).json({
        //     message: "User Created",
        // });
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
};