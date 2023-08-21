import { Component, Input } from '@angular/core';
import { Configuration } from '../utils/configuration';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent {
  @Input() configuration: Configuration = new Configuration();
}

// TODO: Bottles with less liquid should be smaller, not stretch the liquid