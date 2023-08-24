import { Bottle } from "./bottle";

export class Configuration {

  private childConfigurations: Configuration[] = new Array<Configuration>();
  public get ChildConfigurations(): Configuration[] {
    return this.childConfigurations.filter(c => true);
  }
  public get FatherConfiguration(): Configuration | any {
    return this.fatherConfiguration;
  }

  public get Bottles(): Bottle[] {
    return this.bottles.filter(_ => true);
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

  constructor(private bottles: Bottle[] = [], private fatherConfiguration: Configuration | any = undefined) { }

  public GenerateNextConfigurations(): Configuration[] {
    for (let bottleIndex = 0; bottleIndex < this.bottles.length; ++bottleIndex) {
      let alreadyTopped: number[] = new Array<number>();
      for (let colorIndex = this.bottles[bottleIndex].TopColorsCount; colorIndex > 0; --colorIndex) {
        let newBottles = this.bottles.map(b => new Bottle(b.Capacity, b.Content));
        let colors = newBottles[bottleIndex].PopTopColors(colorIndex);
        for (let newBottleIndex = 0; newBottleIndex < newBottles.length; ++newBottleIndex) {
          if (newBottleIndex == bottleIndex)
            continue;
          if (newBottles[newBottleIndex].CanAdd(colors) && !alreadyTopped.includes(newBottleIndex)) {
            alreadyTopped.push(newBottleIndex);
            var tmp = newBottles.map(b => new Bottle(b.Capacity, b.Content));
            !tmp[newBottleIndex].TryAdd(colors);
            let childConfiguration = new Configuration(tmp, this);
            this.childConfigurations.push(childConfiguration);
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
