'use strict'

import { Person } from "./person";
import { Student } from "./student";

let firstPerson: Person = new Person('Wut', 23, 'alien');
let secondPerson: Person = new Person('Adika', 30, 'male');
let thirdPerson: Person = new Student();

firstPerson.introduce();
secondPerson.getGoal();
thirdPerson.introduce();
thirdPerson.getGoal();