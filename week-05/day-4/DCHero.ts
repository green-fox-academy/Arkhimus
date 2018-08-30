import { Hero } from "./Hero";
import Punchable from "./Punchable";

'use strict';

export class DCHero extends Hero {

  constructor(name:string, motivation: number = 45){
    super(name);
  }

  public punch(other: Punchable): void {
    if (!(other instanceof DCHero) && this.getMotivationLevel() >= 1) {
      other.bePunched(this.motivation / 1.5);
    }
  }
}