import { Animal } from "./animals";

'use strict';

export class Bird extends Animal {

  constructor(name: string, breadsWith: string = 'laying eggs') {
    super(name);
    this.breadsWith = breadsWith;
  }

  getName(): string {
    return `${this.name}`;
  }

  breed(): string {
    return this.breadsWith;
  }
}