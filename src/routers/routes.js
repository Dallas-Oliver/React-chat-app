const express = require("express");
const User = require("../models/UserModel");

const router = express.Router();

router.post("/users", async (req, res) => {
  // Create a new user

  try {
    const user = new User(req.body);
    console.log(user);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user: user, token: token });
    res.redirect("./users/login");
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/users/login", async (req, res) => {
  //Login a registered user

  try {
    const { username, password } = req.body;
    const user = await User.findByCredentials(username, password);
    if (!User) {
      return res
        .status(401)
        .send({ error: "Login failed! Check authentication credentials" });
    }
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(401).send(error);
  }
});

module.exports = router;
