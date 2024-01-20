const { pool } = require('../database/db');
const util = require('util');

const poolQuery = util.promisify(pool.query).bind(pool);

// get all itineraries of a specific user in database
const getUserItineraries = async (req, res) => {
    try {
        const userId = req.user.id;
        const itineraryData = await poolQuery(
            `SELECT
            itinerary.id AS itinerary_id,
            itinerary.country_id,
            itinerary.user_id,
            itinerary.budget,
            itinerary.title,
            GROUP_CONCAT(DISTINCT destination.name SEPARATOR ', ') AS destination_names
            FROM
                itinerary
            JOIN
                itinerary_destination ON itinerary.id = itinerary_destination.itinerary_id
            JOIN
                destination ON itinerary_destination.destination_id = destination.id
            WHERE
                itinerary.user_id = ?
            GROUP BY
                itinerary.id, itinerary.country_id, itinerary.user_id, itinerary.budget, itinerary.title;`
            ,
            [userId]
        );

        res.status(200).json({
            itinerary: itineraryData,
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
        const itineraryData = await poolQuery(
            `SELECT * from itinerary 
            WHERE id = ?`
            ,
            [itineraryId]
        );
        // get destination list from specific itinerary
        const destinationsData = await poolQuery(
            `SELECT name
            FROM destination
            WHERE id IN (
                SELECT destination_id
                FROM itinerary_destination
                WHERE itinerary_id = ?
            );`
            ,
            [itineraryId]
        );

        const data = {
            itineraryData,
            destinationList: destinationsData
        }

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

// delete itinerary
const deleteItinerary = async (req, res) => {
    try {
        const itineraryId = req.params.id;

        // delete child table records first
        await poolQuery(
            `DELETE FROM itinerary_destination 
            WHERE itinerary_id = ?;`
            ,
            [itineraryId]
        );
        // parent table records
        await poolQuery(
            `DELETE FROM itinerary 
            WHERE id = ?;`
            ,
            [itineraryId]
        );

        res.status(202).json({
            message: "Itinerary Deleted",
        });
    } catch (err) {
        res.status(500).json({
            message: err,
        });
    }
};

module.exports = {
    getUserItineraries,
    getItinerary,
    postItinerary,
    patchItinerary,
    deleteItinerary
};