import { Component, OnInit } from '@angular/core';
import { Configuration } from './utils/configuration';
import { Bottle } from './utils/bottle';
import { Colors } from './utils/color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'GetColorFrontend';
  public configuration: Configuration = new Configuration();

  showAddBottlePanel: boolean = false;

  constructor() { }
  ngOnInit(): void {
    let bottle: Bottle = new Bottle(4);
    bottle.SetColor(Colors.Blue.value, 0);
    this.configuration.AddBottle(bottle);
    bottle = new Bottle(4);
    bottle.SetColor(Colors.Green.value, 0);
    bottle.SetColor(Colors.Green.value, 1);
    this.configuration.AddBottle(bottle);

    setTimeout(() => {
      let bottle: Bottle = new Bottle(4);
      bottle.SetColor(Colors.Pink.value, 0);
      this.configuration.AddBottle(bottle);
    }, 5000)
  }

}
