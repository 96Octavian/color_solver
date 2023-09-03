import { Injectable } from '@angular/core';
import { Configuration } from './configuration';
import { Stack } from './stack';
import { Bottle } from './bottle';
import { Colors } from './color';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private configurationsTree: Set<string> = new Set<string>();
  private configurations: Stack<Configuration> = new Stack<Configuration>();

  private configuration: Configuration = new Configuration();
  public get Configuration(): Configuration {
    return this.configuration
  }

  private solving: boolean = false;
  public get IsSolving(): boolean {
    return this.solving;
  }
  public get SolvingConfiguration(): Configuration | any {
    return this.configurations.Items.find(c => c.IsSolved);
  }

  public get IsSolved(): boolean {
    return this.SolvingConfiguration !== undefined;
  }

  constructor() {

    let bottle = new Bottle(4, [Colors.Green.value, Colors.Blue.value, Colors.Pink.value, Colors.Yellow.value])
    this.configuration.AddBottle(bottle);
    bottle = new Bottle(4, [Colors.Green.value, Colors.Blue.value, Colors.Yellow.value, Colors.Pink.value])
    this.configuration.AddBottle(bottle);
    bottle = new Bottle(4, [Colors.Orange.value, Colors.Pink.value, Colors.Orange.value, Colors.Green.value])
    this.configuration.AddBottle(bottle);
    bottle = new Bottle(4, [Colors.Blue.value, Colors.Orange.value, Colors.Green.value, Colors.Pink.value])
    this.configuration.AddBottle(bottle);
    bottle = new Bottle(4, [Colors.Blue.value, Colors.Orange.value, Colors.Yellow.value, Colors.Yellow.value])
    this.configuration.AddBottle(bottle);
    bottle = new Bottle(4)
    this.configuration.AddBottle(bottle);
    bottle = new Bottle(4)
    this.configuration.AddBottle(bottle);
    bottle = new Bottle(4)
    this.configuration.AddBottle(bottle);
    bottle = new Bottle(4)
    this.configuration.AddBottle(bottle);
    bottle = new Bottle(4)
    this.configuration.AddBottle(bottle);

    /*let bottle: Bottle = new Bottle(4, [Colors.Blue.value, Colors.Blue.value, Colors.Green.value, Colors.Green.value]);
    this.configuration.AddBottle(bottle);
    bottle = new Bottle(4, [Colors.Green.value, Colors.Green.value, Colors.Blue.value, Colors.Blue.value]);
    this.configuration.AddBottle(bottle);
    bottle = new Bottle(4, []);
    this.configuration.AddBottle(bottle);*/

    // let bottle: Bottle = new Bottle(4, [Colors.Blue.value]);
    // this.configuration.AddBottle(bottle);
    // bottle = new Bottle(4, [Colors.Green.value, Colors.Green.value, Colors.Green.value]);
    // this.configuration.AddBottle(bottle);
    // bottle = new Bottle(4, [Colors.Pink.value, Colors.Pink.value]);
    console.log("Configuration service has been constructed!");
  }

  Clear(): void {
    console.log("[ConfigurationService] Clearing...")
    this.configuration = new Configuration();
    this.configurationsTree = new Set<string>();
    this.configurations = new Stack<Configuration>();
  }
  Solve(): Promise<boolean> {
    this.solving = true;
    // this.configurationsTree.clear();
    // this.configurations.clear();
    this.configurations.push(this.configuration);
    this.configurationsTree.add(this.configuration.ToString());

    return new Promise((resolve, reject) => {
      try {
        while (!this.IsSolved && !this.configurations.isEmpty())
          this.GenerateMoves();
        resolve(true);
      } catch (error) {
        reject(error);
      }
      finally {
        this.solving = false;
      }
    });
  }

  GenerateMoves(): boolean {
    let current = this.configurations.pop();
    if (current === undefined) {
      return false;
    }

    // console.log("Step:");
    // console.log(current.ToString());

    let moves: Configuration[] = current.GenerateNextConfigurations();
    // if (moves.some(c => c.IsSolved))
    //   console.log("Solved!");

    // console.log("Next moves:");
    // current.ChildConfigurations.forEach(m=>console.log(m.ToString()));

    moves = moves.filter(m => !this.configurationsTree.has(m.ToString()));

    // console.log("Next moves filtered:");
    // moves.forEach(m=>console.log(m.ToString()));

    moves.forEach((m) => {
      this.configurations.push(m);
      this.configurationsTree.add(m.ToString());
    })

    return moves.length > 0;
  }

}
