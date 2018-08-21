import { Student } from "./student";
import { Mentor } from "./mentor";

'use strict'

export class Cohort {
  private name: string;
  private students: Student[];
  private mentors: Mentor[];

  constructor(name: string) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }
  addStudent(Student) {
    this.students.push();
  }
  addMentor(Mentor) {

  }
  info() {
    console.log(`The ${this.name} cohort has ${this.students.size} students and ${this.mentors.size} mentors.`);
  }
}