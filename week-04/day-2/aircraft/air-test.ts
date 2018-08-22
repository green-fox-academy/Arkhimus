'use strict';

import { Aircraft } from "./aircraft";
import { F16 } from "./f16";
import { F35 } from "./f35";

<<<<<<< HEAD
'use strict'

let plane1: Aircraft = new F16();
let plane2: Aircraft = new F35();

=======
let plane1: Aircraft = new F16();
let plane2: F35 = new F35();
>>>>>>> 80d72af822d15b10cc977c95b1d7e656a760d2c7

console.log(plane1, plane2);
plane1.refill(5);
plane2.refill(8);
console.log(plane1, plane2);
console.log(plane1.getStatus());
console.log(plane2.getStatus());
console.log(plane2.isPriority());
console.log(plane2.fight());
console.log(plane2);
console.log(plane2.getStatus());