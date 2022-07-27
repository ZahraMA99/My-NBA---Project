// MY NBA

const express = require("express");
const axios = require("axios");
const app = express();
const path = require("path");

const teamToIDs = {
  lakers: "1610612747",
  warriors: "1610612744",
  heat: "1610612748",
  suns: "1610612756",
};

app.use(express.static(path.join(__dirname, "clientSpecs")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.get("/teams/:teamName", (request, response) => {
  let teamName = request.params.teamName;
  axios
    .get("http://data.nba.net/10s/prod/v1/2018/players.json")
    .then(function (res) {
      const playersArray = res.data.league.standard;
      const teamPlayers = playersArray
        .filter((p) => p.teamId === teamToIDs[teamName] && p.isActive)
        .map((player) => ({
          firstName: player.firstName,
          lastName: player.lastName,
          jersey: player.jersey,
          pos: player.pos,
        }));
      response.send(teamPlayers); // send to frontend 
    });
});

const port = 3000;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
