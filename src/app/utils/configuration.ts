import { Bottle } from "./bottle";

export class Configuration {
  private bottles: Bottle[] = []
  public get Bottles(): Bottle[] {
    return this.bottles.filter(_ => true);
  }
  public AddBottle(bottle: Bottle) {
    this.bottles.push(bottle);
  }
  public RemoveBottle(bottle: Bottle): void {
    this.bottles = this.bottles.filter(b => b != bottle);
  }
}
