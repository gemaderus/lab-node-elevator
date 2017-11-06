const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator ();
elevator.update();
elevator.start();

setTimeout(() => elevator.stop(), 11000);

var e = new Elevator();

elevator.start();

elevator.call(new Person("Gema", 5 , 10));
elevator.call(new Person("Nadia", 2 , 3));
elevator.call(new Person("Miguel", 6 , 7));
elevator.call(new Person("Susana", 1 , 10));
elevator.call(new Person("Pepa", 3 , 8));
elevator.call(new Person("Pedro", 7 , 6));
elevator.call(new Person("Liam", 10 , 1));
