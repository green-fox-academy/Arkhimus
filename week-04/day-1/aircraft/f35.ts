import { Aircraft } from "./aircraft";

'use strict'

export class F35 extends Aircraft{

  constructor(name: string = 'F35', maxAmmo: number = 12, baseDamage: number = 50){
    super(name, maxAmmo, baseDamage);
  }
}