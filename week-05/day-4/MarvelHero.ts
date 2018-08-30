import { Hero } from "./Hero";
import Punchable from "./Punchable";

'use strict';

export class MarvelHero extends Hero {

  constructor(name:string, motivation: number = 40){
    super(name, motivation);
  }

  public punch(other: Punchable): void {
    if (!(other instanceof MarvelHero) && this.getMotivationLevel() >= 1) {
      other.bePunched(this.motivation / 1.5);
    }
  }
}