export default class Rank {
    static TWO = new Rank("Two", "2");
    static THREE = new Rank("Three", "3");
    static FOUR = new Rank("Four", "4");
    static FIVE = new Rank("Five", "5");
    static SIX = new Rank("Six", "6");
    static SEVEN = new Rank("Seven", "7");
    static EIGHT = new Rank("Eight", "8");
    static NINE = new Rank("Nine", "9");
    static TEN = new Rank("Ten", "T");
    static JACK = new Rank("Jack", "J");
    static QUEEN = new Rank("Queen", "Q");
    static KING = new Rank("King", "K");
    static ACE = new Rank("Ace", "A");

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
