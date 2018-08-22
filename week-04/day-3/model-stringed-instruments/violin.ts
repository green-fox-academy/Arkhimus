import { StringedInstrument } from "./stringed-instruments";

'use strict';

export class Violin extends StringedInstrument {

  constructor(instrumentName: string = 'violin', numberOfStrings: number = 4) {
    super(instrumentName, numberOfStrings);
  }

  sound(): string {
    return 'Screech';
  }

  play(): void {
    console.log(`The ${this.instrumentName},has ${this.numberOfStrings} strings and goes BOOOOOM... just kidding it goes: ${this.sound()}`);
  }
}