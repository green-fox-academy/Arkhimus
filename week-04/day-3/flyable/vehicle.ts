import { Flyable } from "./flyable";

'use strict';

export abstract class Vehicle {
  type: string;
  weight: number;
  itGoesWRUUUUMM: boolean;

  constructor(type: string, weight: number, sound: boolean){
    this.type = type;
    this.weight = weight;
    this.itGoesWRUUUUMM = sound;
  }
}