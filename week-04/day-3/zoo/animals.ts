'use strict';

export abstract class Animal {
  protected name: string;
  protected age: number;
  protected breadsWith: string;
  protected isCute: boolean = true;

  constructor(name: string) {
    this.name = name;
  }

  abstract getName(): string;
  abstract breed(): string;
}