import { Player } from "./Player";

export class Match {
  public player1: { player: Player };
  public player2: { player: Player };
  public played: Boolean = false;
  public unfairness: number = 0
  constructor({ player1, player2 }: { player1: Player; player2: Player }) {
    //revisar estoy definiendo wins 2 veces, puede ser util para compara matches.
    this.player1 = { player: player1 };
    this.player2 = { player: player2 };
    this.unfairness = Math.abs(player1.wins - player2.wins)
  }

  public setPlayed() {
    this.played = true;
  }

  public calculateFairness() { //Tengo que revisar esta formula, probablem, el problema es cuando genero los resultados de la ronda 
    this.unfairness = Math.abs(this.player1.player.wins*100 + this.player1.player.setWins - this.player2.player.wins*100 -  this.player2.player.setWins)
  }
}
