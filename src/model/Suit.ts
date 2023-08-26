export default class Suit {
    static CLUBS = new Suit("Clubs", "c");
    static DIAMONDS = new Suit("Diamonds", "d");
    static HEARTS = new Suit("Hearts", "h");
    static SPADES = new Suit("Spades", "s");

    name: string;
    symbol: string;

    constructor(name: string, symbol: string) {
        this.name = name;
        this.symbol = symbol
    }

    toString() {
        return this.name;
    }

}
