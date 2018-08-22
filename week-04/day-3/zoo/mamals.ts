import { Animal } from "./animals";

'use strict';

export class Mammal extends Animal {

  constructor(name: string, breadsWith: string = 'giving birth') {
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