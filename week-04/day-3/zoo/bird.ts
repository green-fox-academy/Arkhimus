import { Animal } from "./animals";
import { Flyable } from "../flyable/flyable";

'use strict';

export class Bird extends Animal {

  constructor(name: string, breadsWith: string = 'laying eggs') {
    super(name);
    this.breadsWith = breadsWith;
  }

  getName(): string {
    return `${this.name}`;
  }

  breed(): string {
    return this.breadsWith;
  }

  fly(){
    console.log(`Hi I'm ${this.name} and I'm flying yo!!`);
  }
}