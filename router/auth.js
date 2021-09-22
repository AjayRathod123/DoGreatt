const express = require("express");
const router = express.Router();

require("../db/conn.js");
const User = require("../model/userSchema");

// Routing in auth

router.post("/work", async (req, res) => {
  const { firstname, lastname, category, email, contact } = req.body;

  if (!firstname || !lastname || !category || !email || !contact) {
    return res.status(422).json({ Error: "plz filled the data" });
  }

  const user = new User({ firstname, lastname, category, email, contact });

  try {
    const userRegister = await user.save();
    if (userRegister) {
      res.status(201).json({ message: "user register successfully" });
    } else {
      res.status(500).json({ error: "Failed to register" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
