'use strict';
import { F35 } from "./f35";

export class Aircraft {
  private name: string;
  private maxAmmo: number;
  private baseDamage: number;
  private currentAmmo: number;

  constructor(name: string, baseDamage: number, maxAmmo: number) {
    this.name = name;
    this.currentAmmo = 0;
    this.baseDamage = baseDamage;
    this.maxAmmo = maxAmmo;
  }

  fight(): number {
    let damagePoints: number = this.damage(); 
    this.currentAmmo = 0;
    return damagePoints;
  }

  damage() : number {
    return this.currentAmmo * this.baseDamage;
  }

  refill(fill: number): number {
    if (fill > this.maxAmmo) {
      return this.currentAmmo = this.maxAmmo;
    } else {
      return this.currentAmmo += fill;
    }
  }

  getType(): string {
    return `${this.name}`;
  }

  getStatus(): string {
    return `Type ${this.name}, Ammo: ${this.maxAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.maxAmmo * this.baseDamage}`;
  }

  isPriority(): boolean {
    return this instanceof F35;
  }
}
