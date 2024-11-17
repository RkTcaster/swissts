export class Player {
  //Para ir puliendo el fairness se le puede agregar ademas de wins, loss y sets win loss
  public name: string;
  public wins: number = 0;
  public setWins: number = 0;
  public setLoss: number = 0;
  constructor({
    name,
    wins,
    setWins,
    setLoss,
  }: {
    name: string;
    wins: number;
    setWins: number;
    setLoss: number;
  }) {
    this.name = name;
    this.wins = wins;
    this.setWins = setWins;
    this.setLoss = setLoss;
  }
  public addWin() {
    this.wins += 1;
  }
  public addSetWin(){
    this.setWins += 1
  }
  public addSetLoss(){
    this.setLoss += 1
  }
}
