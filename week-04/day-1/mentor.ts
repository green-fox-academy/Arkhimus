'use strict'

import { Person } from "./person";

export class Mentor extends Person {
  private level: string; // (junior / intermediate / senior)

  constructor(name: string, age: number, gender: string, level: string = 'intermediate') {
    super(name, age, gender);
    this.level = level;
  }
  introduce() {
    console.log(`${super.getIntro} ${this.level} mentor.`);
  }
  getGoal() {
    console.log('Educate brilliant junior software developers.');
  }
}