import { Component, Input } from '@angular/core';
import { Configuration } from '../utils/configuration';
import { Bottle } from '../utils/bottle';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent {
  @Input() configuration: Configuration = new Configuration();

  @Input() solving: boolean = false;

  Remove(bottle: Bottle):void{
    this.configuration.RemoveBottle(bottle);
  }
}

// TODO: Bottles with less liquid should be smaller, not stretch the liquid