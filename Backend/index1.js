const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

app.use(cors());

mongoose.connect("mongodb://localhost:27017/userData", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  console.log("- - -Hello from Server");
  res.send("Hello from server!!");
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(8000, () => console.log("------- Server started on port 8000"));
