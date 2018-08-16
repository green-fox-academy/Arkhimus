import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

let bakker: any[][] = [];

function orderDominoes(examDominoes: Domino[]): any[][] {
  bakker.push(examDominoes[0].values);
  for (let i: number = 0; i < examDominoes.length; i++) {
    for (let j: number = 1; j < examDominoes.length; j++) {
      if (examDominoes[j].values[0] === bakker[i][1]) {
        bakker.push(examDominoes[j].values);
      }
    }
  }
  return bakker;
}


function print(dominoes: Domino[]) {
  dominoes.forEach(function (value) {
    console.log(value);
  });
}

let dominoes = initializeDominoes();
console.log(orderDominoes(dominoes));
