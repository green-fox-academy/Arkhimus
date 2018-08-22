import { Aircraft } from "./aircraft";

'use strict'

export class F35 extends Aircraft {
  constructor(name: string = 'F35', currentAmmo: number = 0, baseDamage: number = 50, maxAmmo: number = 12) {
    super(name, currentAmmo, baseDamage, maxAmmo);
  }
}
