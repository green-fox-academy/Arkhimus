'use strict'
export{}

class Person{
  name: string;
  age: number;
  gender: string;

  constructor(name: string, age: number, gender: string){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  introduce(){
    console.log('Hi, I\'m ', this.name, 'a', this.age, 'year old', this.gender);
  }
  getGoal(){
    console.log('My goal is: Live for the moment!');
  }
}

let firstPerson = new Person('Jane Doe', 30, 'female');

class Student{
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number;

  constructor(name: string, age: number, gender: string, previousOrganization: string){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }
  getGoal(){
    console.log('Be a junior software developer');
  }
  introduce(){
    console.log('Hi, I\'m ', this.name, 'a', this.age, 'year old', this.gender, 'from', 
    this.previousOrganization, 'who skipped', this.skippedDays, 'days from the course already');
  }
  skipDays(numberOfDays: number){
    this.skippedDays = this.skippedDays + numberOfDays;
  }
}

let firstStudent = new Student('Jane Doe', 30, 'female', 'The School of Life');

class Mentor{
  name: string;
  age: number;
  gender: string;
  level: string;

  constructor(name: string, age: number, gender: string, level: string){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }
  getGoal(){
    console.log('Educate brilliant junior software developers.');
  }
  introduce(){
    console.log('Hi, I\'m ', this.name, 'a', this.age, 'year old', this.gender, this.level, 'mentor');
  }
}

let firstMentor = new Mentor('Jane Doe', 30, 'female', 'intermediate');

class Sponsor{
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number;

  constructor(name: string, age: number, gender: string, company: string){
    this.name = name;
    this.age = age;
    this.gender = gender;
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