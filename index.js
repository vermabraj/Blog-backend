const express = require("express");
const { connection } = require("./configs/db");
const { UserRouter } = require("./routes/User.route");
const { PostRouter } = require("./routes/Post.route");
const { ProfileRouter } = require("./routes/Profile.route");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("HOME PAGE of my Blog Website");
});

// ROUTES
app.use("/users", UserRouter);
app.use("/posts", PostRouter);
// app.use("/users/profile", ProfileRouter);

app.listen(4500, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
  console.log("Running at PORT 4500");
});
