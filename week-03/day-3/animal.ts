'use strict'

export class Animal {
  private hunger: number = 50;
  private thirst: number = 50;

  constructor(hunger: number, thirst: number) {
    this.hunger = hunger;
    this.thirst = thirst;
  }
  eat() {
    this.hunger--;
  }
  drink() {
    this.thirst--;
  }
  play() {
    this.thirst++;
    this.hunger++;
  }
}