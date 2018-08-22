import { StringedInstrument } from "./stringed-instruments";

'use strict';

export class Violin extends StringedInstrument {

  constructor() {
    super();
  }
  sound() {
    throw new Error("Method not implemented.");
  }
}