import Game from "./Game";

function rollMany(n, pins, game) {
  for(let i=0; i < n; i++) {
    game.roll(pins);
  }
}

describe("Bowling game", () => {
  it("Debería mostrar un puntaje de 0 cuando los tiros fueron 0", () => {
    let game = new Game();
    rollMany(20, 0, game);
    expect(game.getScore()).toEqual(0)
  });
  it("Debería mostrar un puntaje de 20 cuando los tiros fueron todos de 1", () => {
    let game = new Game();
    rollMany(20, 1, game);
    expect(game.getScore()).toEqual(20)
  });
  it("Debería aplicar la regla de spare si se tiran todos los pinos en un frame", () => {
    let game = new Game();
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(17, 0, game);
    expect(game.getScore()).toEqual(16)
  });
});
