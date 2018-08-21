import { Aircraft } from "./aircraft";

'use strict'

export class F16 extends Aircraft {
  constructor(name: string = 'F16', currentAmmo: number = 0, baseDamage: number = 30, maxAmmo: number = 8) {
    super(name, currentAmmo, baseDamage, maxAmmo);
  }
}