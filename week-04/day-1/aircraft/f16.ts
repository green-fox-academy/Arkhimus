import { Aircraft } from "./aircraft";

'use strict'

export class F16 extends Aircraft{

  constructor(name: string = 'F16', currentAmmo: number = 8, baseDamage: number = 30){
    super(name, currentAmmo, baseDamage);
  }
}