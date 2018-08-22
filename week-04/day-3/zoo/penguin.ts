import { Bird } from "./bird";
import { Flyable } from "../flyable/flyable";

'use strict';

export class Penguin extends Bird implements Flyable {

  constructor(name: string, breadsWith: string) {
    super(name, breadsWith);
  }

  takeOff(): void {
    console.log(`${this.name} says: Penguins can't fly dummy..`);
  }

  fly(): void {
    console.log(`Come on bro I'm ${this.name} so I can't fly.. :/`);
  }

  land(): void {
    console.log(`... I never took off ...\n`);
  }
}