import { Bottle } from "./bottle";

export class Configuration {

  private childConfigurations: Map<string, Configuration> = new Map<string, Configuration>();
  public get ChildConfigurations(): Configuration[] {
    return Array.from(this.childConfigurations.values());
  }
  public get FatherConfiguration(): Configuration | undefined {
    return this.fatherConfiguration;
  }

  public get Bottles(): Bottle[] {
    return this.bottles.filter(() => true);
  }
  public AddBottle(bottle: Bottle) {
    this.bottles.push(bottle);
  }
  public RemoveBottle(bottle: Bottle): void {
    this.bottles = this.bottles.filter(b => b != bottle);
  }
  public get IsSolved(): boolean {
    return this.bottles.every(b => b.IsComplete);
  }

  constructor(private bottles: Bottle[] = [], private readonly fatherConfiguration?: Configuration) { }

  public GenerateNextConfigurations(): Configuration[] {
    let alreadyTopped: Set<number> = new Set<number>();
    for (let bottleIndex = 0; bottleIndex < this.bottles.length; ++bottleIndex) {
      alreadyTopped.clear();
      for (let colorIndex = this.bottles[bottleIndex].TopColorsCount; colorIndex > 0; --colorIndex) {
        let newBottles = this.bottles.map(b => new Bottle(b.Capacity, b.Content));
        let colors = newBottles[bottleIndex].PopTopColors(colorIndex);
        for (let newBottleIndex = 0; newBottleIndex < newBottles.length; ++newBottleIndex) {
          if (newBottleIndex == bottleIndex)
            continue;
          if (newBottles[newBottleIndex].CanAdd(colors) && !alreadyTopped.has(newBottleIndex)) {
            alreadyTopped.add(newBottleIndex);
            var tmp = newBottles.map(b => new Bottle(b.Capacity, b.Content));
            tmp[newBottleIndex].TryAdd(colors);
            let childConfiguration = new Configuration(tmp, this);
            this.childConfigurations.set(childConfiguration.ToString(), childConfiguration);
          }
        }
      }
    }

    return this.ChildConfigurations;
  }

  ToString(): string {
    return this.Bottles
      .map(b => b.ToString())
      .sort()
      .join('\n');
  }
}
