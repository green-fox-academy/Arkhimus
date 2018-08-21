'use strict'

import { Person } from "./person";

class Sponsor extends Person {
  private company: string;
  private hiredStudents: number;

  constructor(name: string, age: number, gender: string, company: string = 'Google') {
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = 0;
  }
}