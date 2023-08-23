export type HEX = `#${string}`;
export type Color = {
    name: string,
    value: HEX
}

export class Colors {
    static Empty: Color = { value: "#00FFFFFF", name: "Empty" };
    static Green: Color = { value: "#1ae907", name: "Green" };
    static Blue: Color = { value: "#07b1e9", name: "Blue" };
    static Pink: Color = { value: "#e907d6", name: "Pink" };
    static Yellow: Color = { value: "#fcfc0a", name: "Yellow" };
    static Orange: Color = {value: "#faab23", name: "Orange"}

    static Colors: Color[] = [this.Empty, this.Blue, this.Green, this.Pink, this.Yellow, this.Orange];

}