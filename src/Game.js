export default class Game {
  constructor() {
    this.rolls = new Array(21).fill(null);
    this.currentRoll = 0;
  }
  roll(pins) {
    this.rolls[this.currentRoll++] = pins;
  }
  getScore() {
    let score = 0;
    let frameIndex = 0;
    for(let frame = 0; frame < 10; frame++) {
      if(this.rolls[frameIndex] === 10) {
        score += 10 + this.strikeBonus(frameIndex);
        frameIndex++;
      }
      else if(this.isSpare(frameIndex)) {
        score += 10 + this.rolls[frameIndex + 2];
        frameIndex += 2;
      }
      else {
        score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
        frameIndex += 2;
      }
    }
    return score;
  }
  isStrike(frameIndex) {
    return this.rolls[frameIndex] === 10;
  }
  isSpare(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  }
  strikeBonus(frameIndex) {
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
  }
}

