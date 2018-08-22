import { Person } from "./person";                   //ha a person máshol export-olva van és így nem global ezzel hívjuk meg

'use strict'

export class Student extends Person {

  private previousOrganization: string;
  private skippedDays: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'The School of Life') {
    super(name, age, gender); // ezt a personre amit hoz magával a másik classból
    this.previousOrganization = previousOrganization; // innentől lehet kiegészíteni a jelenlegi class változóival
    this.skippedDays = 0;
  }
  introduce() {
    /*super.introduce(); // ezt berakja a másikról: [ Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ]
    console.log(`from ${this.previousOrganization} who skipped ${this.skippedDays} from the course already.`); */
    console.log(`${super.getIntro} from ${this.previousOrganization} who skipped ${this.skippedDays} from the course already.`);
  }
  getGoal() {
    console.log('Be a junior software developer.');
  }
  skipDays(numberOfDays) {
    this.skippedDays = this.skippedDays + numberOfDays;
  }
}

// firstPerson.getGoal();    // máshonnan változó nono
