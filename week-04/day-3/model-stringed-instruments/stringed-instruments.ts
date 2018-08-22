'use strict';

import { Instruments } from "./intruments";

export abstract class StringedInstrument extends Instruments {
  protected numberOfStrings: number;

  constructor(instrumentName: string, numberOfStrings: number) {
    super(instrumentName);
    this.numberOfStrings = numberOfStrings;
  }

  abstract sound(): void;
}