import Game from "./Game";

describe("Bowling game", () => {
  it("Debería mostrar un puntaje de 0 cuando los tiros fueron 0", () => {
    let game = new Game();
    for(let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.getScore()).toEqual(0)
  });
  it("Debería mostrar un puntaje de 20 cuando los tiros fueron todos de 1", () => {
    let game = new Game();
    for(let i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.getScore()).toEqual(20)
  });
});
