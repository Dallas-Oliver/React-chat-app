const express = require("express");
const User = require("../models/UserModel");
require("../db/db");
const router = express.Router();

router.post("/users", async (req, res) => {
  // Create a new user

  try {
    const user = new User(req.body);
    const token = await user.generateAuthToken();
    await user.save(function(err, savedUser) {
      if (err) {
        console.log(err);
      }
      console.log(savedUser);

      res.status(201).json({ user: user, token: token });
    });
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
