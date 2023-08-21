import { Bottle } from "./bottle";

export class Configuration {
    public bottles: Bottle[] = []
    public AddBottle(bottle: Bottle) {
      this.bottles.push(bottle);
    }
  }
  