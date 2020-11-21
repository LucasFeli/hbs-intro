const express = require("express");
const { data, players, cities } = require("./data");
const app = express();

app.use(express.static("public"));
const viewsPath = `${__dirname}/views`;
app.set("views", viewsPath);
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", data);
});

app.get("/list", (req, res) => {
  res.render("list", {
    cities: cities,
    person: {
      name: "felipe",
      lastName: "apellido",
    },
    players: players,
  });
});

app.listen(5555, () => {
  console.log("server is running in port 5555");
});
