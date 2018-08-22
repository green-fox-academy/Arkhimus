import { Aircraft } from "./aircraft";

"use strict";

export class otherCarrier {
  private aircrafts: Aircraft[];
  private ammoStore: number;
  private currentAmmo: number;
  private healthPoint: number;

  constructor(
    ammoStore: number = 300,
    currentAmmo: number,
    healthPoint: number = 4000
  ) {
    this.aircrafts = [];
    this.ammoStore = ammoStore;
    this.healthPoint = healthPoint;
    this.currentAmmo = currentAmmo;
  }
<<<<<<< HEAD
  add() {
=======
>>>>>>> 80d72af822d15b10cc977c95b1d7e656a760d2c7

  add(toAdd: Aircraft): void {
    this.aircrafts.push(toAdd);
  }
<<<<<<< HEAD
  fill() {
    this.ammoStore = this.ammoStore - this.currentAmmo;
    if (this.ammoStore < this.currentAmmo) {
      throw ('Not enough ammo bro... :(((((');
    }
  }
  fight(Carrier) {
    Carrier.healthPoint = Carrier.healthPoint - this.Carrier.ammoStore;
    if (Carrier.healthPoint < 1) {
=======

  fill(): void {
    this.ammoStore = this.ammoStore - this.currentAmmo;
    this.aircrafts
      .filter((aircraft, index, arr) => {
        return aircraft.isPriority();
      })
      .forEach(aircraft => {
        this.currentAmmo = aircraft.refill(this.currentAmmo);
      });
    for (let hegyiLevego of this.aircrafts) {
      this.currentAmmo = hegyiLevego.refill(this.currentAmmo);
    }
    for (let i = 0; i < this.aircrafts.length; i++) {
      this.currentAmmo = this.aircrafts[i].refill(this.currentAmmo);
    }
    if (this.ammoStore < this.currentAmmo) {
      throw "Not enough ammo bro... :(((((";
    }
  }

  fight(otherCarrier): number {
    let damageTotal:number ;
    this.aircrafts.forEach(element => {
      damageTotal += element.fight();
    });
    otherCarrier.healthPoint -= damageTotal;
    if (otherCarrier.healthPoint < 1) {
>>>>>>> 80d72af822d15b10cc977c95b1d7e656a760d2c7
      console.log(`It's dead Jim :(`);
    }
    return 0;
  }
<<<<<<< HEAD
  getStatus() {
    console.log(`HP: ${this.healthPoint}, Aircraft count: ${this.aircrafts.length}, Ammo storage: ${this.ammoStore}, 
    Total damage: ${this.currentAmmo}, Aircrafts: ${this.aircrafts}`);
=======

  private totalDamageWithoutShhotingAndStuff = () => {
    let damage: number;
    this.aircrafts.forEach( elem => {
      damage += elem.damage();
    });
    return damage;
  }

  getStatus(): void {
    console.log(`HP: ${this.healthPoint}, Aircraft count: ${
      this.aircrafts.length
    }, Ammo storage: ${this.ammoStore}, 
    Total damage: ${this.totalDamageWithoutShhotingAndStuff()}, Aircrafts: ${this.aircrafts}`);
>>>>>>> 80d72af822d15b10cc977c95b1d7e656a760d2c7
  }
}
