const jwt = require("jsonwebtoken");

const authenticationToken = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(404).json({ "error ": "No token found" });
  }

  jwt.verify(token.substring(7), "secretkey", (err, user) => {
    if (err) {
      return res.status(400).json({ "error ": "Unauthorised token" });
    }
    console.log("Decoded user : ", user);
    req.user = user;
    next();
  });
};

module.exports = { authenticationToken };
