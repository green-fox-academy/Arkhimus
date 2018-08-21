import { Carrier } from "./carrier";

'use strict'

export class Aircraft{
  name: string
  maxAmmo: number;
  baseDamage: number;

  constructor(name: string, maxAmmo: number = 0, baseDamage: number){
    this.name = name;
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
  }
  fight(){
    this.maxAmmo = 0;
    return this.baseDamage;
  }
  refill(fill: number){
    return fill - this.maxAmmo;
    this.maxAmmo = this.maxAmmo;
  }
  getType(){
    return `${this.name}`;
  }
  getStatus(){
    return `Type ${this.name}, Ammo: ${this.maxAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.maxAmmo * this.baseDamage}`
  }
  isPriority(){
    if (this.name == 'f35'){
      return true;
    }
  }
}

let f16 = new Aircraft('F16', 8, 30);
let f35 = new Aircraft('F35', 12, 50);

