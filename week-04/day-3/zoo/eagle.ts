import { Bird } from "./bird";
import { Flyable } from "../flyable/flyable";

'use strict';

export class Eagle extends Bird implements Flyable {

  constructor(name: string, breadsWith: string) {
    super(name, breadsWith);
  }

  takeOff(): void {
    console.log(`${this.name} says: 'ere we go madafakaaaaz`);
  }

  fly(): void {
    console.log(`Welcome on board Ladies and Gentleman I'm ${this.name} and our destination is Neverland`);
  }

  land(): void {
    console.log(`Oh look a rabbit...\n`);
  }
}