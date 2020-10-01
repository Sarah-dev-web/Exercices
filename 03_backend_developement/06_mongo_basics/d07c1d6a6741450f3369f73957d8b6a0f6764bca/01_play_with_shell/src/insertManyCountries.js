/* global db */

// write your MongoDB shell command here
const countries = [
  {
    name: "France",
    capital: "Paris",
    continent: "Europe",
  },
  {
    name: "Colombia",
    capital: "Bogota",
    continent: "America",
  },
  {
    name: "Iceland",
    capital: "Reyjkavik",
    continent: "Europe",
  },
];
db.worldAtlas.insertMany(countries);
