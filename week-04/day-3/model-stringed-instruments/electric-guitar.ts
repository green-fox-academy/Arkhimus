import { StringedInstrument } from "./stringed-instruments";

'use strict';

export class ElectricGuitar extends StringedInstrument {

  constructor() {
    super();
  }
  sound() {
    throw new Error("Method not implemented.");
  }
}