const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator ();
elevator.update();
elevator.start();

setTimeout(() => elevator.stop(), 11000);


// elevator.floorDown();
