const { pool } = require("../database/db");
const bcrypt = require("bcrypt");
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
    // if (passwordMatch) {
    //     const jwtToken = jwt.sign(
    //       { employeeId: user[0].employee_id },
    //       "secretkey",
    //       {
    //         expiresIn: "2 days",
    //       }
    //     );
    //     return res.status(200).json({ jwtToken: jwtToken });
    if (data.length > 0) {
      var token = jwt.sign({ username: data[0].username }, "secretkey", {
        expiresIn: "2 days",
      });

      return res.status(200).json({ "jwtToken ": token });
    }

    return res.status(400).json({ "error ": "Invalid Credentials" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ "error ": "Fail to retrieve user" });
  }
};

module.exports = {
  userLogin,
};
