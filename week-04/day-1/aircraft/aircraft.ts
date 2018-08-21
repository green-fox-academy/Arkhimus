import { Carrier } from "./carrier";

'use strict'

export class Aircraft{
  private name: string
  private maxAmmo: number;
  private baseDamage: number;
  private currentAmmo: number;

  constructor(name: string, currentAmmo: number = 0, baseDamage: number){
    this.name = name;
    this.currentAmmo =currentAmmo;
    this.baseDamage = baseDamage;
  }
  fight(){
    this.maxAmmo = 0;
    return this.baseDamage * this.currentAmmo;
  }
  refill(fill: number){
    this.maxAmmo = fill - this.maxAmmo;
    return this.maxAmmo;
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