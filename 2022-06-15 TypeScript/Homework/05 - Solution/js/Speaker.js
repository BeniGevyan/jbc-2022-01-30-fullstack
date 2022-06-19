class Speaker {
    constructor() { }
    get color() {
        return this._color;
    }
    get volume() {
        return this._volume;
    }
    set color(value) {
        // if (value !== 'White' && value !== 'Black' && value !== 'Grey') {
        //   throw new Error('Color must be White, Black, Grey');
        // }
        // this._color = value;
        if (value === 'White' || value === 'Black' || value === 'Grey') {
            this._color = value;
        }
        throw new Error('Color must be White, Black, Grey');
    }
    set volume(value) {
        if (value < 0 || value > 10) {
            throw new Error('Volume must be a number between 0 and 10');
        }
        this._volume = value;
    }
    turnOn() {
        alert('The speaker is on!');
    }
    turnOff() {
        alert('The speaker is off!');
    }
    testSound() {
        alert('Beep!');
    }
    display() {
        document.write(`Color: ${this.color}, Volume: ${this.volume}`);
    }
}
