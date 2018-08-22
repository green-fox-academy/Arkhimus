'use strict';

import { Instruments } from "./intruments";

export abstract class StringedInstrument extends Instruments {
  protected numberOfStrings: number;

  constructor() {
    super();
  }

  abstract sound();
}