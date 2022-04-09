const express = require("express");

const router = express.Router();

let players = [
  {
    name: "manish",
    dob: "1/1/1995",
    gender: "male",
    city: "jalandhar",
    sports: ["swimming"],
  },
];
router.post("/players", function (req, res) {
  for (let i = 0; i < players.length; i++) {
    if (players[i].name == req.body.name) {
      return res.send("Player with this name already exists");
    }
  }

  let user = req.body;

  players.push(user);
  console.log(players);

  res.send(players);
});

module.exports = router;

// adding this comment for no reason
