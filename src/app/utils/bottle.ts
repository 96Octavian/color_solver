import { Colors, HEX } from "./color";

export class Bottle {
  public get Capacity(): number {
    return this.capacity;
  }
  private colors: HEX[];
  public get Content(): HEX[] {
    return this.colors.filter(c => c != Colors.Empty.value);
  }
  public get Level(): number {
    let pos = this.colors.indexOf(Colors.Empty.value);
    return pos >= 0 ? pos : this.colors.length;
  }
  public get Available(): number {
    return this.Capacity - this.Level;
  };
  public get TopColor(): HEX {
    return this.colors[this.Level > 0 ? this.Level - 1 : this.Level];
  }
  public get TopColorsCount(): number {
    let count = 0;
    for (let i = this.Level - 1; i >= 0; --i) {
      if (this.colors[i] == this.TopColor)
        ++count;
      else
        break;
    }
    return count;
  }
  public get IsFull(): boolean {
    return this.Level == this.Capacity;
  }
  public get IsComplete(): boolean {
    return this.colors.every(c => c == this.colors[0])
  }
  public get PercentageHeight(): number { return 100 / this.colors.length; }

  constructor(private readonly capacity: number, colors: HEX[] = []) {
    this.colors = Array(capacity);
    this.colors.fill(Colors.Empty.value);
    colors.forEach((c) => this.colors[this.Level] = c);
  }

  public PopTopColors(amount: number = 0): HEX[] {
    if (amount > this.TopColorsCount)
      throw new Error("Cannot get more than " + this.TopColorsCount + " colors");
    amount = amount > 0 ? amount : this.TopColorsCount;
    let topColors = this.colors.slice(this.Level - amount, this.Level);
    if (topColors.some(c => c != topColors[0]))
      topColors = new Array<HEX>(0);
    else {
      for (let i = amount; i > 0; --i)
        this.colors[this.Level - 1] = Colors.Empty.value;
    }
    return topColors;
  }

  public PeekTopColors(amount: number = 0): HEX[] {
    if (amount > this.TopColorsCount)
      throw new Error("Cannot peek more than " + this.TopColorsCount + " colors");
    amount = amount > 0 ? amount : this.TopColorsCount;
    let topColors = this.colors.slice(this.Level - amount, this.Level);
    if (topColors.some(c => c != this.colors[0]))
      topColors = new Array<HEX>(0);

    return topColors;
  }

  public PeekContent(amount: number = 0): HEX[] {
    if (amount > this.Level)
      throw new Error("Cannot peek more than " + this.Level + " colors");
    amount = amount > 0 ? amount : this.Level;
    var colors = this.colors.slice(this.Level - amount, this.Level);

    return colors;
  }

  public CanAdd(newColors: HEX[]): boolean {
    if (this.IsFull)
      return false;
    if (newColors.some(c => c == Colors.Empty.value))
      return false;
    if (newColors.some(c => c != newColors[0]))
      return false;
    if (newColors[0] != this.TopColor && this.TopColor != Colors.Empty.value)
      return false;
    if (this.Available < newColors.length)
      return false;
    return true;
  }

  public TryAdd(newColors: HEX[]): boolean {
    if (!this.CanAdd(newColors))
      return false;
    newColors.forEach((color) => {
      this.colors[this.Level] = color;
    })
    return true;
  }

  ToString(): string {
    return this.colors.join('-');
  }
}
