'use strict'

class Sharpie {
  color: string;
  width: number;
  inkAmount: number = 100;

  constructor(color: string, width: number, inkAmount: number) {
    this.color = color;
    this.width = width;
    this.inkAmount = inkAmount;
  }
  use(){
    this.inkAmount--;
  }
}