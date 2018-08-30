import BaseHero from "./BaseHero";
import Punchable from "./Punchable";


export class Hero extends BaseHero implements Punchable {

  protected motivation: number

  constructor(name: string, motivation?: number) {
    super(name);
    this.motivation = motivation;
  }


  public punch(other: Punchable): void {
    if (this.getMotivationLevel() >= 1) {
      other.bePunched(this.motivation / 1.5);
    }
  }

  public getMotivationLevel(): number {
    if (this.motivation < 25) {
      return 0;
    } else if (this.motivation >= 25 && this.motivation <= 40) {
      return 1;
    } else if (this.motivation > 40) {
      return 2;
    }
  }

  public toString(): string {
    if (this.getMotivationLevel() === 0) {
      return ` ${this.getName()} is not motivated anymore. `
    } else if (this.getMotivationLevel() === 1) {
      return ` ${this.getName()} is motivated. `
    } else if (this.getMotivationLevel() === 2) {
      return ` ${this.getName()} is well motivated. `
    }
  }

  bePunched(damage: number): void {
    this.motivation -= this.motivation / damage;
  }

}