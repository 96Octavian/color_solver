import { Colors, HEX } from "./color";

export class Bottle {
  private colors: HEX[];
  Content(): HEX[] {
    return this.colors.filter(c => c != Colors.Empty.value)
  }
  Level(): number {
    let pos = this.colors.indexOf(Colors.Empty.value);
    return pos >= 0 ? pos : this.colors.length;
  }
  constructor(capacity: number) {
    this.colors = Array(capacity);
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
