import { Vehicle } from "./vehicle";
import { Flyable } from "./flyable";

'use strict';

export class Helicopter extends Vehicle {

  constructor(type: string, weight: number, sound: boolean){
    super(type, weight, sound);
  }

  fly(){
    console.log(`On my way bro`);
  }
}