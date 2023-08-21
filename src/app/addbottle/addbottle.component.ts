import { Component, Input, } from '@angular/core';
import { Configuration } from '../utils/configuration';
import { Color, Colors, HEX, } from '../utils/color';
import { Bottle } from '../utils/bottle';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-addbottle',
  templateUrl: './addbottle.component.html',
  styleUrls: ['./addbottle.component.css']
})
export class AddbottleComponent {
  @Input() configuration: Configuration | any;
  @Input() drawer: MatDrawer | any;
  private capacity: number = 0;
  @Input() public set Capacity(val: number) {
    this.capacity = val;
    this.selectedValues = new Array(this.capacity);
    this.selectedValues.fill(Colors.Empty.value);
  }
  public get Capacity(): number {
    return this.capacity;
  }
  colorChoices(): Color[] {
    return Colors.Colors.filter(c => true);
  }
  colorCount(): number[] {
    return new Array(this.capacity).fill(null).map((_, i) => i);
  }
  selectedValues: HEX[] = [];

  Add(): void {
    if (this.capacity > 0) {
      let bottle: Bottle = new Bottle(this.capacity);
      this.selectedValues.filter(c => c != Colors.Empty.value).forEach((color, index) => bottle.SetColor(color, index));
      this.configuration.AddBottle(bottle);
    }
    this.drawer.close();
  }

}
