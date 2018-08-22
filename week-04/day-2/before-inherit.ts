'use strict'
export{}

class Person {
  protected name: string;
  protected age: number;
  protected gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce(): void {
    console.log('Hi, I\'m ', this.name, 'a', this.age, 'year old', this.gender);
  }

  getGoal(): void {
    console.log('My goal is: Live for the moment!');
  }
}

let firstPerson = new Person('Jane Doe', 30, 'female');

class Student extends Person {
  private previousOrganization: string;
  private skippedDays: number;

  constructor(name: string = 'Bela', age: number = 80000,
              gender: string = 'alien', previousOrganization: string = 'gugli') {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }

  getGoal(): void {
    console.log('Be a junior software developer');
  }

  introduce(): void {
    console.log(`Hi, I'm , ${this.name} a, ${this.age}, year old, ${this.gender}, 'from', 
    this.previousOrganization, 'who skipped', this.skippedDays, 'days from the course already`);
  }

  skipDays(numberOfDays: number): number {
    this.skippedDays = this.skippedDays + numberOfDays;
    return this.skippedDays;
  }
}

let firstStudent = new Student('Jane Doe', 30, 'female', 'The School of Life');

class Mentor extends Person {
  level: string;

  constructor(name: string, age: number, gender: string, level: string){
    super(name, age, gender);
    this.level = level;
  }

  getGoal(): void {
    console.log('Educate brilliant junior software developers.');
  }

  introduce(): void {
    console.log('Hi, I\'m ', this.name, 'a', this.age, 'year old', this.gender, this.level, 'mentor');
  }
}

let firstMentor = new Mentor('Jane Doe', 30, 'female', 'intermediate');

class Sponsor extends Person {
  private company: string;
  private hiredStudents: number;

  constructor(name: string, age: number, gender: string, company: string) {
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = 0;
  }
  introduce(){
    console.log('Hi, I\'m ', this.name, 'a', this.age, 'year old', this.gender, 'who represents', this.company, 'and hired', this.hiredStudents, 'students so far.');
  }
  hire(){
    this.hiredStudents++;
  }
  getGoal(){
    console.log('Hire brilliant junior software developers.');
  }
}

let firstSponsor = new Sponsor('Jane Doe', 30, 'female', 'Google');
