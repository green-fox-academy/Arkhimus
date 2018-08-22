import { StringedInstrument } from "./stringed-instruments";

'use strict';

export class BassGuitar extends StringedInstrument {

  constructor(instrumentName: string = 'bass guitar', numberOfStrings: number = 4) {
    super(instrumentName, numberOfStrings);
  }

  sound(): string {
    return 'Duum-duum-duum';
  }

  play(): void {
    console.log(`The ${this.instrumentName} , has ${this.numberOfStrings} strings and goes: ${this.sound()}`);
  }
}