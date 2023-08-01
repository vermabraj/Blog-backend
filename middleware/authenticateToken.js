

const authenticateTo = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) res.status(401).send({ message: "Authorization failed " });
      req.body.author = decoded.userID;
      next();
    });
  } else {
    res.status(400).send({ message: "Please login first" });
  }
};



const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "masai", (err, decoded) => {
      if (decoded) {
        req.body.author = decoded.userID;

        next();
      } else {
        req.send({ msg: "Please Login" });
      }
    });
  } else {
    res.send({ msg: "Please Login" });
  }
};

module.exports = { authenticateToken };
