export class Player {
  //Para ir puliendo el fairness se le puede agregar ademas de wins, loss y sets win loss
  public name: string
  public wins: number = 0
  public loss: number = 0
  public draws: number = 0
  public gameWins: number = 0
  public gameLoss: number = 0
  constructor({
    name,
    wins,
    loss,
    draws,
    gameWins,
    gameLoss,
  }: {
    name: string
    wins: number
    loss: number
    draws: number
    gameWins: number
    gameLoss: number
  }) {
    this.name = name
    this.wins = wins
    this.loss = loss
    this.draws = draws
    this.gameWins = gameWins
    this.gameLoss = gameLoss
  }
  public addWin() {
    this.wins += 1
  }
  public addLoss() {
    this.loss += 1
  }
  public addDraw() {
    this.draws += 1
  }
  public addGameWin() {
    this.gameWins += 1
  }
  public addGameLoss() {
    this.gameLoss += 1
  }
}
