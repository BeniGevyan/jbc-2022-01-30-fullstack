class IceCream {
  flavor: string;
  private _weight: number;
  private _price: number;

  constructor(flavor: string, weight: number, price: number) {
    this.flavor = flavor;
    this._weight = weight;
    this._price = price;
  }

  get weight(): number {
    return Math.floor(this._weight);
  }

  get price(): number {
    return this._price;
  }

  set weight(value: number) {
    if (value < 0) {
      throw new Error('Illegal weight!');
    }

    this._weight = value;
  }

  display(): void {
    document.write(`Flavor: ${this.flavor}, Weight: ${this._weight}, Price: ${this._price} <br/>`);
  }
}
