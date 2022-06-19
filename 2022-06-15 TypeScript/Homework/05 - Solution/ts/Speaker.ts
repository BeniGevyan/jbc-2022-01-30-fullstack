class Speaker {
  private _color: string;
  private _volume: number;

  constructor() {}

  get color(): string {
    return this._color;
  }

  get volume(): number {
    return this._volume;
  }

  set color(value: string) {
    //// another way
    // if (value !== 'White' && value !== 'Black' && value !== 'Grey') {
    //   throw new Error('Color must be White, Black, Grey');
    // }
    // this._color = value;

    if (value === 'White' || value === 'Black' || value === 'Grey') {
      this._color = value;
    } else {
      throw new Error('Color must be White, Black, Grey');
    }
  }

  set volume(value: number) {
    if (value < 0 || value > 10) {
      throw new Error('Volume must be a number between 0 and 10');
    }
    this._volume = value;
  }

  turnOn(): void {
    alert('The speaker is on!');
  }

  turnOff(): void {
    alert('The speaker is off!');
  }

  testSound(): void {
    alert('Beep!');
  }

  display(): void {
    document.write(`Color: ${this.color}, Volume: ${this.volume}`);
  }
}
