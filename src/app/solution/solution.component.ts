import { Component, OnInit } from '@angular/core';
import { Configuration } from '../utils/configuration';
import { ConfigurationService } from '../utils/configuration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  public get IsSolving(): boolean {
    return this.configurationService.IsSolving
  }
  public get IsSolved(): boolean {
    return this.configurationService.IsSolved;
  }
  public get Configuration(): Configuration {
    return this.configurationService.Configuration;
  }
  constructor(private configurationService: ConfigurationService, private router: Router) {
  }
  ngOnInit(): void {
    this.configurationService.Solve()
      .then(() => {
        console.log("Stopped solving");
        console.log("Service " + this.configurationService.IsSolved ? "found" : "did not find" + " a solution");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log("Asked service to solve");
  }

  public get SolvingConfigurationChain(): Configuration[] {
    let confs = new Array<Configuration>();
    if (!this.configurationService.IsSolved)
      return confs;
    confs.push(this.configurationService.SolvingConfiguration!);
    while (confs[confs.length - 1].FatherConfiguration !== undefined) {
      confs.push(confs[confs.length - 1].FatherConfiguration!);
    }
    return confs.reverse();
  }

  Refill(): void {
    this.configurationService.Clear();
    this.router.navigate(['']);
  }
}
