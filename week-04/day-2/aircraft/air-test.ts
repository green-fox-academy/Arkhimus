import { Aircraft } from "./aircraft";
import { Carrier } from "./carrier";
import { F16 } from "./f16";
import { F35 } from "./f35";

'use strict'

let plane1: Aircraft = new F16();
let plane2: Aircraft = new F35();


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