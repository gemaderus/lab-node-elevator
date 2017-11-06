class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up";
    this.interval = 0;
  }

  start() {
    this.interval = setInterval(()=> {this.floorDown(),
                                      this.update()
                                    },
                                      1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  update() {
    this.log();
  }
  _passengersEnter() {
  }
  _passengersLeave() {
  }
  floorUp() {
    if(this.floor === this.MAXFLOOR) {
      this.floor = this.MAXFLOOR;
    } else {
      return this.floor += 1;
    }
  }

  floorDown() {
    if(this.floor === 0) {
      this.floor = 0;
    } else {
      return this.floor -= 1;
    }
  }

  call() {
  }
  log() {
    console.log("Direction: " + this.direction + " Floor: " + this.floor);
  }
}

module.exports = Elevator;
