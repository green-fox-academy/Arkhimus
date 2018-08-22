'use strict'

export class Person {
  protected name: string;
  protected age: number;
  protected gender: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') { //itt lehet deafult értéket megadni és üresen meghívni pl, mint a firstPerson
    /* if ( gender !== 'male' || gender !== 'female'){
      throw new Error();
    } */
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  introduce() {
    console.log(this.getIntro());
  }
  getGoal() {
    console.log('My goal is: Live for the moment!');
  }
  getIntro() {
    return `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}`;
  }
}

