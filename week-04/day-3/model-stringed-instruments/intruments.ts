'use strict';

export abstract class Instruments {
  protected instrumentName: string;

  constructor(instrumentName: string) {
    this.instrumentName = instrumentName;
  }

  abstract play(): void;
}