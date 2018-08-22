import { Student } from "./student";
import { Mentor } from "./mentor";
import { Person } from "./person";

'use strict';

export class Cohort {
  private name: string;
  private studentsAndDementors: Person[];

  constructor(name: string) {
    this.studentsAndDementors = [];
    this.name = name;
  }

  addStudent( student: Student ): number {
    return this.studentsAndDementors.push(student);
  }

  addMentor( mentorosKaposzta : Mentor ): number {
    return this.studentsAndDementors.push(mentorosKaposzta);
  }

  addPerson(person: Person): number {
    if ( person instanceof Mentor ) {
      return this.addMentor(person);
    } else if ( person instanceof Student ) {
      return this.addStudent(person);
    }
  }

  info(): void {
    console.log(`The ${this.name} cohort has ${this.studentsAndDementors.length} mentors and students together.`);
  }
}