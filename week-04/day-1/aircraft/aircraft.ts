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
  fight(): number {
    // this.currentAmmo = 0;
    return this.baseDamage * this.currentAmmo;
  }
  refill(fill: number): number {
    if (fill > this.maxAmmo + this.currentAmmo) {
      return this.currentAmmo = this.maxAmmo;
    } else {
      return this.currentAmmo = fill + this.currentAmmo;
    }
  }
  getType(): string {
    return `${this.name}`;
  }
  getStatus(): string {
    return `Type ${this.name}, Ammo: ${this.maxAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.maxAmmo * this.baseDamage}`;
  }
  isPriority(): boolean {
    return this.name == 'F35';
  }
}