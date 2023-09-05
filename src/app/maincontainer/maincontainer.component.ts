import { Component } from '@angular/core';
import { Configuration } from '../utils/configuration';
import { ConfigurationService } from '../utils/configuration.service';

@Component({
  selector: 'app-maincontainer',
  templateUrl: './maincontainer.component.html',
  styleUrls: ['./maincontainer.component.css'],
})
export class MaincontainerComponent {
  showFiller = false;
  configuration: Configuration;
  constructor(configurationService: ConfigurationService) {
    this.configuration = configurationService.Configuration;
  }
}
