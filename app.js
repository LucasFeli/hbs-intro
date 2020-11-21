const express = require("express");
const { data, players, cities } = require("./data");
const app = express();
const hbs = require("hbs");
const PunkAPIWrapper = require("punkapi-javascript-wrapper");

const punkApi = new PunkAPIWrapper();

hbs.registerPartials(`${__dirname}/views/partials`);

app.use(express.static("public"));
const viewsPath = `${__dirname}/views`;
app.set("views", viewsPath);
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", data);
});

app.get("/test/:beerId", (req, res) => {
  const { beerId } = req.params;
  console.log(beerId);
  res.send(`${beerId}`);
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

app.get("/beers", async (req, res) => {
  const beers = await punkApi.getBeers();
  res.render("list", { beers });
});

app.listen(5555, () => {
  console.log("server is running in port 5555");
});
