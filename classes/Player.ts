export class Player {
  //Agregue
  public name: string;
  public wins: number = 0;
  constructor({ name, wins }: { name: string; wins: number }) {
    this.name = name;
    this.wins = wins;
  }
  public addWin() {
    this.wins += 1;
  }
}
