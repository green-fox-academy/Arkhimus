'use strict'

import { Person } from "./person";

export class Mentor extends Person {
  private level: string; // (junior / intermediate / senior)

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate') {
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