import { Carrier } from "./carrier";

'use strict'

export class Aircraft {
  public name: string
  public maxAmmo: number;
  public baseDamage: number;
  public currentAmmo: number;

  constructor(name: string, currentAmmo: number = 0, baseDamage: number, maxAmmo: number) {
    this.name = name;
    this.currentAmmo = currentAmmo;
    this.baseDamage = baseDamage;
    this.maxAmmo = maxAmmo;
  }
  fight() {
    // this.currentAmmo = 0;
    return this.baseDamage * this.currentAmmo;
  }
  refill(fill: number) {
    if (fill > this.maxAmmo + this.currentAmmo) {
      return this.currentAmmo = this.maxAmmo;
    } else {
      return this.currentAmmo = fill + this.currentAmmo;
    }
  }
  getType() {
    return `${this.name}`;
  }
  getStatus() {
    return `Type ${this.name}, Ammo: ${this.maxAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.maxAmmo * this.baseDamage}`;
  }
  isPriority() {
    return this.name == 'F35';
  }
}