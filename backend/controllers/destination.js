const util = require("util");
const { pool } = require("../database/db");
const query = util.promisify(pool.query).bind(pool);

const createDestination = async (req, res) => {
	console.log("create destination called");
	try {
		const { cost, name, notes } = req.body;
		await query(
			"INSERT INTO techtrek24.destination (country_id, cost, name, notes) VALUES (1, ?, ?, ?)",
			[cost, name, notes]
		);
		res.status(201).json("Destination Created");
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
};

const viewDestination = async (req, res) => {
	console.log("view destination called");

	try {
		const destination = await query("select * from techtrek24.destination");
		res.status(200).json({ "destinations ": destination });
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
};

const deleteDestination = async (req, res) => {
	console.log("delete destination called");

	try {
		const destinationid = parseInt(req.params.destinationid, 10);
		await query(
			"delete from techtrek24.itinerary_destination where destination_id = ?",
			[destinationid]
		);
		await query("delete from techtrek24.destination where id = ?", [
			destinationid,
		]);
		res.status(200).json("Destination Deleted");
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
};

const updateDestination = async (req, res) => {
	console.log("update destination called");
	try {
		const { cost, name, notes, id } = req.body;
		await query(
			"Update techtrek24.destination Set cost = ?,  name = ?, notes = ? where id = ?",
			[cost, name, notes, id]
		);
		res.status(204).json("Destination Updated.");
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
};

const getAllcountry = async (req, res) => {
	console.log("Country called");
	try {
		const country = await query("select * from techtrek24.country");
		res.status(200).json({ Countries: country });
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
};

const getCountryName = async (req, res) => {
	console.log("Country name called");
	try {
		//console.log(req);
		const id = req.params.id;
		const country = await query(
			"select * from techtrek24.country where id = ?",
			[id]
		);
		res.status(200).json({ country });
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
};

module.exports = {
	createDestination,
	viewDestination,
	deleteDestination,
	updateDestination,
	getAllcountry,
	getCountryName,
};

//const claims = await query ('Select * from dbs.projectexpenseclaims where EmployeeID = ?',[requestedEmployeeId]);
//res.status(200).json({claims})
