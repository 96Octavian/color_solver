import {Component, Input} from '@angular/core';
import { Configuration } from '../utils/configuration';

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'app-maincontainer',
  templateUrl: './maincontainer.component.html',
  styleUrls: ['./maincontainer.component.css'],
})
export class MaincontainerComponent {
  showFiller = false;
  @Input() configuration: Configuration = new Configuration()
}
