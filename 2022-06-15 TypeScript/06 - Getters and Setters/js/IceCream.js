class IceCream {
    constructor(flavor, weight, price) {
        this.flavor = flavor;
        this._weight = weight;
        this._price = price;
    }
    get weight() {
        return Math.floor(this._weight);
    }
    get price() {
        return this._price;
    }
    set weight(value) {
        if (value < 0) {
            throw new Error('Illegal weight!');
        }
        this._weight = value;
    }
    display() {
        document.write(`Flavor: ${this.flavor}, Weight: ${this._weight}, Price: ${this._price} <br/>`);
    }
}
