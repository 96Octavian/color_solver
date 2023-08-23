import { Component, OnInit } from '@angular/core';
import { Configuration } from '../utils/configuration';
import { ConfigurationService } from '../utils/configuration.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  public get IsSolving(): boolean {
    return this.configurationService.IsSolving
  }
  public get Configuration(): Configuration {
    return this.configurationService.Configuration;
  }
  constructor(private configurationService: ConfigurationService) {
  }
  ngOnInit(): void {
    // console.log("Configuration:");
    // console.log(this.configurationService.Configuration.ToString());
    this.configurationService.Solve()
      .then((data) => {
        // console.log("Stopped solving:", data);
        // if (this.configurationService.IsSolved)
        //   this.SolvingConfigurationChain.forEach((c) => console.log(c.ToString()));
        // else
        //   console.log("No solution found");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // console.log("Asked service to solve");
  }

  public get SolvingConfigurationChain(): Configuration[] {
    let confs = new Array<Configuration>();
    if (!this.configurationService.IsSolved)
      return confs;
    confs.push(this.configurationService.SolvingConfiguration);
    while (confs[confs.length - 1].FatherConfiguration !== undefined) {
      confs.push(confs[confs.length - 1].FatherConfiguration);
    }
    return confs.reverse();
  }

  ClearConfiguration(): void{
    this.configurationService.Clear();
  }
}
