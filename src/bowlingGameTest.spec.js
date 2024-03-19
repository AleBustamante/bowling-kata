import Game from "./Game";

describe("Bowling game", () => {
  it("Debería mostrar un puntaje de 0 cuando los tiros fueron 0", () => {
    let game = new Game();
    for(let i = 0; i < 20; i++) {
      game.roll();
    }
    expect(game.score()).toEqual(0)
  });
});
