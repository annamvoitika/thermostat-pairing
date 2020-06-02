class Thermostat {
  constructor(){
    this.degrees = 20;
    this.mode = "on";
  }

  degree(number){
    this.degrees = number
    return this.degrees;
  }

  up(number){
    this.degrees = this.degrees + number
      if (this.mode == "on" && this.degrees > 25{
      throw "Power saving mode is on";
    }
      else {
    return this.degrees;}
  }

  down(number){
    if (this.degrees - number < 10){
      throw "Temperature too low!";
    }
    else {
    this.degrees = this.degrees - number
    return this.degrees;}
  }

  mode_status(){
    return this.mode;
  }
};
