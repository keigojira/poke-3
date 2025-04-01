class Card {
    constructor(name, type, hp, attack, energyRequired, isEX = false) {
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.attack = attack;
        this.energyRequired = energyRequired;
        this.isEX = isEX;
    }
}

let playerDeck = [
    new Card("フレイムドラゴン", "🔥", 120, 50, 1),
    new Card("ヒートタイガー", "🔥", 110, 45, 1),
    new Card("ファイヤーバード", "🔥", 180, 80, 2, true),
];

let opponentDeck = [
    new Card("アクアシールド", "💧", 100, 40, 1),
    new Card("オーシャンキング", "💧", 190, 90, 2, true),
];

class Player {
    constructor(deck) {
        this.hand = [];
        this.battlefield = [];
        this.bench = [];
        this.deck = deck;
        this.energy = 0;
    }

    drawCard() {
        if (this.deck.length > 0) {
            this.hand.push(this.deck.pop());
        }
    }

    playCard(card) {
        if (this.battlefield.length === 0) {
            this.battlefield.push(card);
        } else if (this.bench.length < 2) {
            this.bench.push(card);
        }
    }

    attack(opponent) {
        if (this.battlefield.length === 0) {
            alert("攻撃できるポケモンがいません！");
            return;
        }
        let attacker = this.battlefield[0];
        if (this.energy < attacker.energyRequired) {
            alert("エネルギー不足！");
            return;
        }
        opponent.battlefield[0].hp -= attacker.attack;
        if (opponent.battlefield[0].hp <= 0) {
            alert(opponent.battlefield[0].name + "が倒された！");
            opponent.battlefield.shift();
        }
        this.energy -= attacker.energyRequired;
    }
}

let player = new Player(playerDeck);
let opponent = new Player(opponentDeck);

document.getElementById("end-turn").addEventListener("click", function() {
    alert("相手のターン！");
});
