import { Colors, HEX } from "./color";

export class Bottle {
  public get Capacity(): number {
    return this.capacity;
  }
  private colors: HEX[];
  public get Colors(): HEX[] {
    return this.colors.filter(c => c != Colors.Empty.value);
  }
  Level(): number {
    let pos = this.colors.indexOf(Colors.Empty.value);
    return pos >= 0 ? pos : this.colors.length;
  }
  constructor(private capacity: number) {
    this.colors = Array(capacity);
    this.colors.fill(Colors.Empty.value);
  }
  PercentageHeight(): number { return 100 / this.colors.length; }
  public SetColor(color: HEX, index: number) {
    if (index < this.colors.length) {
      this.colors[index] = color;
    }
    else {
      console.log("Could not add color " + color);
    }
  }
}
