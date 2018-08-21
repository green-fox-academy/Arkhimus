import { Aircraft } from "./aircraft";

'use strict'

export class Carrier {
  private aircrafts: Aircraft[];
  private ammoStore: number;
  private healthPoint: number;
  private currentAmmo: number;

  constructor(ammoStore: number = 300, healthPoint: number = 4000) {
    this.aircrafts = [];
    this.ammoStore = ammoStore;
    this.healthPoint = healthPoint;
    this.currentAmmo = currentAmmo;
  }
  add(){

  }
  fill(){
    this.ammoStore = this.ammoStore - this.currentAmmo;
    if (this.ammoStore < this.currentAmmo){
      throw ('Not enough ammo bro... :(((((');
    }
  }
  fight(Carrier){
    Carrier.healthPoint = Carrier.healthPoint - this.Carrier.ammoStore;
    if (Carrier.healthPoint < 1){
      console.log(`It's dead Jim :(`);
    }
  }
  getStatus(){
    console.log(`HP: ${this.healthPoint}, Aircraft count: ${this.aircrafts.length}, Ammo storage: ${this.ammoStore}, 
    Total damage: ${this.currentAmmo}, Aircrafts: ${this.aircrafts}`);
  }
}