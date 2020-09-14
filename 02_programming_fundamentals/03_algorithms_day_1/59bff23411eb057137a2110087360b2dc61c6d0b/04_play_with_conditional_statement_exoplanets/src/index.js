// Don't modify these lines for tests to work properly.
const star = require("./data/starData");
const planet = require("./data/exoplanetData");

// Your code here:
function canHabitateLife(star, planet) {
    if(star.spectralClass = "M" || "K" && planet.radius === 1 && planet.mass === 1 && planet.mass < 3 && planet.habitalZone && planet.rotationStability || planet.mass < 0.5 && planet.radius > 1) {
      return true;
  
    }else{
      return false;
    }
  }
  console.log(canHabitateLife(star,planet));

// Don't modifiy this line for test to work properly.
module.exports = canHabitateLife;
