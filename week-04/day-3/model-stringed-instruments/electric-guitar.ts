import { StringedInstrument } from "./stringed-instruments";

'use strict';

export class ElectricGuitar extends StringedInstrument {

  constructor(instrumentName: string = 'electric guitar', numberOfStrings: number = 6) {
    super(instrumentName, numberOfStrings);
  }

  sound(): string {
    return 'Twang';
  }

  play(): void {
    console.log(`The ${this.instrumentName}, has ${this.numberOfStrings} strings and goes: ${this.sound()}`);
  }
}