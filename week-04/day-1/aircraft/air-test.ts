import { Aircraft } from "./aircraft";
import { Carrier } from "./carrier";
import { F16 } from "./f16";
import { F35 } from "./f35";

'use strict'

let plane1: Aircraft = new F16 ();
let plane2: F35 = new F35 ();


// console.log(plane1, plane2);
plane1.refill(73);
plane2.refill(12);
// console.log(plane1,plane2);
// console.log(plane1.getStatus());
console.log(plane2.getStatus());
// console.log(plane2.isPriority());
console.log(plane2.fight());