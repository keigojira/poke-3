class AI {
    constructor(deck) {
        this.player = new Player(deck);
    }

    makeMove() {
        if (this.player.battlefield.length === 0 && this.player.hand.length > 0) {
            this.player.playCard(this.player.hand[0]);
        }

        if (this.player.battlefield.length > 0) {
            this.player.attack(player);
        }
    }
}

let easyAI = new AI(opponentDeck);
let hardAI = new AI([...opponentDeck, new Card("サンダーゴッド", "⚡", 200, 100, 2, true)]);
