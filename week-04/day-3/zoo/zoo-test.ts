import { Bird } from "./bird";
import { Penguin } from "./penguin";
import { Eagle } from "./eagle";

'use strict';

let sparrow: Bird = new Bird('CAPTAIN Jack Sparrow', 'laying eggs yo');
sparrow.fly();

let jozsika: Penguin = new Penguin('Mr. Jozsika', 'laying eggs');
jozsika.takeOff();
jozsika.fly();
jozsika.land();

let seriousSam: Eagle = new Eagle('Mr. Serious', 'laying eggs');
seriousSam.takeOff();
seriousSam.fly();
seriousSam.land();
