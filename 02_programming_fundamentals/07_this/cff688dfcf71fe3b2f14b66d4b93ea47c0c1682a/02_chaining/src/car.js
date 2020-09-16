const car = {
  // Complete here
  speed : 0,
  distance : 0,
  temps : 0,
  
  start : function () {
    this.speed = 0;
    this.distance = 0;
    this.temps = 0;
    Math.log(this.speed/60 * this.minutes);
    
    return this;
  },
  changeSpeed : function(speed) {
    this.changeSpeed = speed;
    return this;
  },
  drive: function (minutes){
    this.drive = minutes;
    return this;
  },
  showDistance : function() {
    return this;
  
  },
};





module.exports = car;
