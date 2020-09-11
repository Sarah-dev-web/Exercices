const star = { spectralClass: "M" };

const planet = {
  mass: 1.02,
  radius: 1.12,
  rotationStability: true,
  habitalZone: false,
};

function canHabitateLife(star, planet) {
  if((star.spectralClass = "M" || "K") && (planet.mass > 0.32) && (0.5<planet.radius< 2.5) && (planet.rotationStability === true)){
    return true;

  }else{
    return false;
  }
}
console.log(canHabitateLife(star,planet));
// Do not remove last lines, it is for tests
module.exports = canHabitateLife;

//The radius of a potentially habitable exoplanet would range between 0.5 and 2.5 earth radii. 
//A mineral planet would need at least a mass starting from 0.32 earth masses to be suitableÒ

//Athough, if a planet’s mass is smaller than 0.5 earth masses, it’s radius would need to be larger than 1 earth radii to maintain life.  
//A stable rotation is a status we give planets that have a fast rotation that doesn't go through large changes over time.