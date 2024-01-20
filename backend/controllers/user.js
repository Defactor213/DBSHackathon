const { pool } = require("../database/db");
const jwt = require("jsonwebtoken");
const util = require("util");

const poolQuery = util.promisify(pool.query).bind(pool);

const userLogin = async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  console.log("username ", username);
  console.log("password ", password);

  try {
    const data = await poolQuery(
      "SELECT * FROM user where username = ? and password = ? ",
      [username, password]
    );
    console.log("data ", data);

    if (data.length > 0) {
      var token = jwt.sign(
        {
          username: data[0].username,
          id: data[0].id,
          firstName: data[0].first_name,
          lastName: data[0].last_name,
        },
        "secretkey",
        {
          expiresIn: "2 days",
        }
      );

      return res.status(200).json({ "jwtToken ": token });
    }

    return res.status(400).json({ "error ": "Invalid Credentials" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ "error ": "Fail to retrieve user" });
  }
};

const userSignUp = async (req, res) => {
  console.log(req.body);
  try {
    const { firstName, lastName, password, username } = req.body;

    const duplicatedUsername = await poolQuery(
      "SELECT * from user where username = ?",
      [username]
    );
    if (duplicatedUsername.length > 0) {
      return res.status(400).json({ "error ": "Username is taken" });
    }

    const createUser = await poolQuery(
      "INSERT into user (first_name, last_name, password, username) VALUES  (?, ?, ?,?)",
      [firstName, lastName, password, username]
    );

    return res.status(201).json({ "message ": "User successfully created" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ "error ": "Error creating user" });
  }
};

module.exports = {
  userLogin,
  userSignUp,
};
